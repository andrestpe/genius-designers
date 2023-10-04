from flask import Flask, jsonify, request, render_template,redirect,session
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_claims
)
from src.controllers.customerController import customerController
import os
import hashlib


app = Flask(__name__)
app.secret_key = "any random string"
app.config['JWT_SECRET_KEY'] = 'cambiar_no_olvidar' 
app.config["IMAGE_UPLOADS"] = "/tmp"
jwt = JWTManager(app)


@app.route('/wa_index', methods=['GET'])
def wa_login():
    _error = request.args.get('error')
    if _error is None:
        _error = 0
    print(_error)
    return render_template('wa_index.html',error = _error)

@app.route('/wa_compra', methods=['GET'])
def wa_login():
    _error = request.args.get('error')
    if _error is None:
        _error = 0
    print(_error)
    return render_template('wa_compra.html',error = _error)

@app.route('/wa_cursos', methods=['GET'])
def wa_login():
    _error = request.args.get('error')
    if _error is None:
        _error = 0
    print(_error)
    return render_template('wa_cursos.html',error = _error)

@app.route('/wa_especializaciones', methods=['GET'])
def wa_login():
    _error = request.args.get('error')
    if _error is None:
        _error = 0
    print(_error)
    return render_template('wa_especializaciones.html',error = _error)



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)