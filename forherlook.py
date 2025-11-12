import csv, datetime, os
from flask import Flask, request, jsonify, send_from_directory, Markup, abort

# ----- CONFIG -----
ADMIN_PASSWORD = os.environ.get('FORHER_ADMIN_PASS', 'changeme')  # change this in production
RESPONSES_CSV = 'responses.csv'
STATIC_FOLDER = '.'

app = Flask(__name__, static_folder=STATIC_FOLDER, static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'forher.html')

# Serve static files (css/js)
@app.route('/<path:filename>')
def static_files(filename):
    allowed = {'forherstyle.css','forherfunc.js','forher.html'}
    if filename in allowed:
        return send_from_directory('.', filename)
    # prevent serving arbitrary files
    abort(404)

@app.route('/respond', methods=['POST'])
def respond():
    data = request.get_json() or {}
    name = data.get('name', '')
    nickname = data.get('nickname', '')
    known = data.get('known', '')
    choice = data.get('choice', '')
    chosen_line = data.get('chosenLine', data.get('chosenLine', data.get('chosen_line', '')))
    timestamp = datetime.datetime.utcnow().isoformat()
    # ensure folder writeable
    try:
        # create file with header if not exists
        file_exists = os.path.exists(RESPONSES_CSV)
        with open(RESPONSES_CSV, 'a', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            if not file_exists:
                writer.writerow(['timestamp_utc','name','nickname','known','choice','chosen_line'])
            writer.writerow([timestamp, name, nickname, known, choice, chosen_line])
    except Exception as e:
        return jsonify({'status':'error','message':str(e)}), 500
    return jsonify({'status':'ok'})

# Simple admin view (password-protected via query param or env variable)
@app.route('/admin/responses')
def admin_responses():
    password = request.args.get('pw','')
    if password != ADMIN_PASSWORD:
        return abort(401)
    rows = []
    if os.path.exists(RESPONSES_CSV):
        with open(RESPONSES_CSV, newline='', encoding='utf-8') as f:
            reader = csv.reader(f)
            rows = list(reader)
    html = ['<html><head><meta charset="utf-8"><title>Responses</title></head><body style="font-family:system-ui,Arial;padding:20px">']
    html.append('<h2>Responses</h2>')
    html.append('<p>Download: <a href="/download/responses.csv">responses.csv</a></p>')
    html.append('<table border="1" cellpadding="6" style="border-collapse:collapse">')
    for r in rows:
        html.append('<tr>' + ''.join(f'<td>{Markup.escape(c)}</td>' for c in r) + '</tr>')
    html.append('</table></body></html>')
    return '\n'.join(html)

@app.route('/download/responses.csv')
def download_csv():
    # simple protection
    pw = request.args.get('pw','')
    if pw != ADMIN_PASSWORD:
        return abort(401)
    if not os.path.exists(RESPONSES_CSV):
        return 'No responses yet', 404
    return send_from_directory('.', RESPONSES_CSV, as_attachment=True)

if __name__ == '__main__':
    # run on 0.0.0.0 so you can access from other devices on same network
    app.run(host='0.0.0.0', port=5000, debug=True)
