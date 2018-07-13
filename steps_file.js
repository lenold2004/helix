'use strict';
const I = actor();
module.exports = function() {
  return actor({

  nextbutton: {css: 'body > div > form > div.submit.navigation_buttons > input'},
  nextbuttonpage: {css: '#nextButton'},

  uploadDxfFile(dxfFile,next) {
    I.selectOption('#spacing_config', 'Old spacing')
    I.say('  I selected Old spacing');
    I.attachFile('#gradient_dxf_upload', dxfFile)
    I.say('  ' + dxfFile + ' is uploaded.');
    if (next==1){    
      I.click(this.nextbuttonpage);   
      I.say('  I click next button');
    }
  },
  uploadDxfFileNewSpacing(dxfFile,next) {
    I.selectOption('#spacing_config', 'New spacing')
    I.say('  I selected New spacing');
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
    I.say('  I wait to finish all ballasting methods were calculated');  
    I.waitForText('- All ballasting methods were calculated.', 180, 'body > div > div.summary_warning_wrapper > div > div');
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
  seeDownloadPage() {
    I.see('Download',{css: 'body > div > div.form_section > h3'})    
  },
  downloadBomTextFile() {
  	I.click('body > div > div:nth-child(6) > a > button');
        I.wait(5);
  },
  downloadPdfFile() {
  	I.click('body > div > div:nth-child(5) > a > button');
        I.wait(5);
  },
  openNewTabAndLoadPage(page) {
    I.openNewTab();
    I.amOnPage(page);        
    I.say('  I open page ' + page);
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
  selectedInverterBrandSma() {
     I.selectOption('#inverter_brand_id', 'SMA');    
  },
  addFromPowerStation(add) {
   I.click('#add_new_power_station'); //+ Add power station   
   if (add==1) {
        I.click('#power_station_form > div.ebom_subsection.submit > input') //Add
        I.say('  Click Add ');
     }
  },
  addFromMonitoring(add) {
   I.click('#add_supervisor_monitor'); //+ Add monitoring   
   if (add==1) {
        I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input') //Add
        I.say('  Click Add ');
     }
  },
  

  });
}

