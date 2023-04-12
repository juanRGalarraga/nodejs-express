"use strict";

/**
 * Implementación de JWT usando jsonwebtoken (https://www.npmjs.com/package/jsonwebtoken)
 */

const jwt = require('jsonwebtoken');

const EXPIRE_IN = '1h';
const SECRET = 'THEMOSTSECRETWORDINTHEALLWORLD';
module.exports = class JWT {
  
  #token;
  #secret;
  #payload;
  #expire;

  constructor(secret = null, expireIn = null){
    this.#setSecret(secret || SECRET);
    this.setExpire(expireIn || EXPIRE_IN);
  }

  /**
   * 
   * @param {object|buffer|string} payload payload could be an object literal, buffer or string representing valid JSON.
   * @returns 
   */
  generateToken(payload){
    try {

      let token = jwt.sign(payload, this.#getSecret(), { expiresIn: this.getExpire() });
      this.setToken(token);

      return token;

    } catch (error) {
      console.error(error);
    }

    return false;
  }

  verifyToken(token){
    let decoded;
    try {

      decoded = jwt.verify(token, this.#getSecret());

    } catch (error) {

      console.error(error.message);

    } finally {
      
      return decoded;

    }

  }

  setToken(token){
    this.#token = token;
    return this;
  }
  getToken(){
    return this.#token;
  }

  #setSecret(secret){
    this.#secret = secret;
    return this;
  }
  #getSecret(){
    return this.#secret;
  }

  setPayload(payload){
    this.#payload = payload;
    return this;
  }
  getPayload(){
    return this.#payload;
  }

  setExpire(expire){
    this.#expire = expire;
    return this;
  }
  getExpire(){
    return this.#expire;
  }
  


}
