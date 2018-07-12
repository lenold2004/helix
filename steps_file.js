'use strict';
const I = actor();
module.exports = function() {
  return actor({

  nextbutton: {css: 'body > div > form > div.submit.navigation_buttons > input'},
  nextbuttonpage: {css: '#nextButton'},
  uploadDxfFile(dxfFile,next) {
    I.selectOption('#spacing_config', 'Old spacing')
    I.attachFile('#gradient_dxf_upload', dxfFile)
    I.say('  ' + dxfFile + ' is uploaded.');
    if (next==1){    
      I.click(this.nextbuttonpage);   
      I.say('  I click next button');
    }
  },
  seeProjectInformationPage(next) {
    I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'});    
    if (next==1) {
       I.click(this.nextbutton);   
       I.say('  I click next button');   
    }
  },
  seeBallastingMethodPage(next) {
    I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
    I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
    if (next==1) {   
       I.click(this.nextbuttonpage);        
       I.say('  I click next button');   
    }
  },
  seeSiteSummaryPage(next) {
    I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
    if (next==1) {
       I.click(this.nextbuttonpage);
       I.say('  I click next button');   
    }
  },
  seeArraySummaryPage(next) {
    I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
    if (next==1) {
       I.click(this.nextbuttonpage);    
       I.say('  I click next button');   
    }
  },
  seePowerStationConfigurationPage(next) {
    I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
    if (next==1) {
       I.click(this.nextbuttonpage);    
       I.say('  I click next button');   
    }
  },
  downloadBomTextFile() {
  	I.click('body > div > div:nth-child(6) > a > button');
        I.wait(5);
  },
  selectedInverterBrandDelta(inverter, add) {
  	 I.selectOption('#inverter_brand_id', 'Delta');
     I.click('#add_standalone_inverter'); //+ inverter
     I.selectOption('#inverter-model', inverter) //Select
     I.say('  Selected ' + inverter + ' from inverter');
     if (add==1) {
        I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
        I.say('  Add ' + inverter);
     }
  },

  

  });
}

