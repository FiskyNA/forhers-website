from flask import Flask, render_template, request, jsonify, send_from_directory
import csv, datetime, os

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def home():
    return send_from_directory('.', 'forher.html')

@app.route('/respond', methods=['POST'])
def respond():
    data = request.get_json()
    choice = data.get('choice', 'unknown')
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open('responses.csv', 'a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([timestamp, choice])
    return jsonify({"status": "saved"})

if __name__ == '__main__':
    app.run(debug=True)
# add these imports near top of forherlook.py
from flask import Markup

@app.route('/admin/responses')
def view_responses():
    rows = []
    if os.path.exists('responses.csv'):
        with open('responses.csv', newline='', encoding='utf-8') as f:
            reader = csv.reader(f)
            rows = list(reader)
    # build simple html
    html = ['<h2>Responses</h2>']
    html.append('<table border="1" cellpadding="6" style="border-collapse:collapse">')
    html.append('<tr><th>Timestamp</th><th>Choice</th></tr>')
    for r in rows:
        ts = Markup.escape(r[0]) if len(r) > 0 else ''
        ch = Markup.escape(r[1]) if len(r) > 1 else ''
        html.append(f'<tr><td>{ts}</td><td>{ch}</td></tr>')
    html.append('</table>')
    return '\n'.join(html)
