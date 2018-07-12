'use strict';
let Helper = codecept_helper;
let assert = require('assert');
let fs;
let pdfreader;
class Myhelper extends Helper {

deleteBomFile(bomFile){
    fs = require('fs');
    return new Promise((resolve, reject) => {  
  	fs.unlink('Downloads/' + bomFile, function(err) {
          if(err && err.code == 'ENOENT') {
            return reject(err);
          } 
          else if (err) {
            return reject(err);
          } else {
             return resolve(bomFile + " is deleted");
          }
         });
    });
  }

BallastLessThanPassthrough(p1, p2){
    return new Promise((resolve, reject) => {
          if (parseInt(p1) < parseInt(p2))
             return resolve("TRUE " + p1 + " < " + p2);
          else
          	 return reject("FALSE " + p1 + " < " + p2);
    });
  }

PDFFileContains(filePath, params){
	  pdfreader = require('pdfreader');
    return new Promise((resolve, reject) => {    	
    	new pdfreader.PdfReader().parseFileItems(filePath, function(err, item){
         if (err)
            return reject(err);
         else if (!item)
            return reject(err);
         else if (item.text) {
         	  if (item.text.indexOf(params) !== -1)
               return resolve(item.text);
            else
          	   return reject(item.text);
        }
            //console.log(item.text);
      });
    });
  }


BomFileContains(filePath, params){
	  fs = require('fs');
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return reject(err);
        }
        if (data === undefined) {
          return reject(data);
        } else {
          //console.log('val', data);
          if (data.indexOf(params) !== -1)
             return resolve(data);
          else
          	 return reject(data);
        }
      });
    });
  }
BomFileDoesNotContains(filePath, params){
	  fs = require('fs');
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return reject(err);
        }
        if (data === undefined) {
          return reject(data);
        } else {
          //console.log('val', data);
          if (data.indexOf(params) !== -1)
            return reject(data); 
          else
          	return resolve(data);          	
        }
      });
    });
  }  


}

module.exports = Myhelper;

