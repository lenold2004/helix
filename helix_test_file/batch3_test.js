
var assert = require('assert');

Feature('Batch 3: CPP Wind Lab Integration - Windlab Integration using Aurora Dxf');

Scenario('Verify that panel specific information are sent to the CPP API when a design is created in Helix Calculator @T201179', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=CPP%20Test&system_type=1&module_type=96%20Cell&building_height=250&building_width=600&building_length=1500&building_parapet_height=12&wind_speed=121&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=2&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/PLUSshape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.openNewTab();
  I.amOnPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102');
  I.see('"system_type":',{css: 'body > pre'})
  I.see('"module_type":',{css: 'body > pre'})
  I.see('"panels":',{css: 'body > pre'})
  I.see('"pressure_for_lifting":',{css: 'body > pre'})
  I.see('"tributary_area_for_sliding":',{css: 'body > pre'})
  I.see('"id":',{css: 'body > pre'})
  //pause();
});

Scenario('Verify that corner values are sent to CPP API when a design is created in Helix Calculator @T201180', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Corner%20Data%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.openNewTab();
  I.amOnPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102');  
  I.see('"angle": 89.93,');
  I.see('"coordinate": {');
  I.see('"x": 796.0,');
  I.see('"y": -795.23,');
  I.see('"z": 30.0');
  I.see('"id": "1",');
  I.see('"interior": false,');
  I.see('"length_ccw": 1592.17,');
  I.see('"length_cw": 1590.29,');
  I.see('"order": 1,');
  I.see('"orientation": "se",');
  I.see('"parapet": 0.0,');
  I.see('"q_value": 25.86231654659943');  
});

Scenario('Verify that the system receives and processes panel information and properly represent uplift and sliding values for each panel @T201181', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Pressure%20Parsing%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.openNewTab();
  I.amOnPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102');  
  I.see('"pressure_parsing_successful":');
});

Scenario('Verify that the ballast types are combined in similar groups when the Helix Calculator is ran through CPP @T201182', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballasting%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  
});



Scenario('Verify that a list of options to choose from after ballast consolidation is provided/added @T201183', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballasting%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 60, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.see('Simplified Ballast',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(2)'});
  I.see('Low Ballast Weight',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(2)'});
  I.see('No Anchors',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(2)'});
  I.see('Pass-Through',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(2)'});
});


Scenario('Verify that example Calculations in the output report for uplift that are specific to the site is provided @T201185', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Uplift%20Test&system_type=1&module_type=96%20Cell&building_height=35&building_width=250&building_length=35&building_parapet_height=1&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Lshape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 180, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'}) 
  I.openNewTab();
  I.amOnPage('http://sp-helix-staging.herokuapp.com/qa/debug-documentation');  
  I.see('"panel_area"',{css: 'body > pre'});
  I.see('"tent_area"',{css: 'body > pre'});
  I.see('"ground_coverage_ratio"',{css: 'body > pre'});
  I.see('"panel_weight"',{css: 'body > pre'});
  I.see('"characteristic_building_length"',{css: 'body > pre'});
  I.see('"velocity_pressure_coeficient"',{css: 'body > pre'});
  I.see('"topographic_factor"',{css: 'body > pre'});
  I.see('"directionality_factor"',{css: 'body > pre'});
  I.see('"velocity_pressure"',{css: 'body > pre'});
  I.see('"module_id"',{css: 'body > pre'});
  I.see('"panel_category"',{css: 'body > pre'});
  I.see('"anchor_capacity"',{css: 'body > pre'});
  I.see('"max_allowable_distributed_weight_on_roof"',{css: 'body > pre'});
  I.see('"a_tributary"',{css: 'body > pre'});
  I.see('"a_n"',{css: 'body > pre'});
  I.see('"uplift_force_from_wind"',{css: 'body > pre'});
  I.see('"pv_system_weight"',{css: 'body > pre'});
  I.see('"ballast_weight_required"',{css: 'body > pre'});
  I.see('"number_of_blocks_required_wo_anchors"',{css: 'body > pre'});
  I.see('"system_distributed_weight_wo_anchors"',{css: 'body > pre'});
  I.see('"anchors_required"',{css: 'body > pre'});
  I.see('"number_of_anchors_required"',{css: 'body > pre'});
  I.see('"number_of_block_required_with_anchors"',{css: 'body > pre'});
  I.see('"system_distributed_weight_with_anchors"',{css: 'body > pre'});
  I.see('"summary_of_design"',{css: 'body > pre'});
});

Scenario('Verify that collected values are sent to CPP API @T201186', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=CPP%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- Panel pressures loaded successfully from CPP.', 60, {css: 'body > div > div.summary_warning_wrapper > div > div'});
 });

Scenario('Verify that a new page, "Ballasting Method" is added after the Array Upload page @T201189', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballasting%20Method%20Selection%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_96_small.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
 });

Scenario('Verify that all corners are sent to CPP API regardless of interior or exterior location @T201190', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Interior%20Corners%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=1.5&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')
  I.openNewTab();  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102');  
  I.closeCurrentTab();
  I.openNewTab();  ;
  I.amOnPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102'); 
  I.see('"interior": false',{css: 'body > pre'});
  I.see('"orientation": "nw"',{css: 'body > pre'});
  I.see('"interior": true',{css: 'body > pre'});
  I.see('"orientation": null',{css: 'body > pre'}); 
});


Scenario('Verify that a list of options to choose from after ballast consolidation is provided/added @T201191', function*(I) {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballasting%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 60, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.see('Simplified Ballast',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(2)'});
  I.see('Low Ballast Weight',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(2)'});
  I.see('No Anchors',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(2)'});
  I.see('Pass-Through',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(2)'});
  I.seeCheckboxIsChecked('body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(1) > input[type="radio"]');
  let simplified_ballast = yield I.grabTextFrom('body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(3)');
  I.say('simplified_ballast: ' + simplified_ballast);
  let pass_through = yield I.grabTextFrom('body > div > form > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(3)');
  I.say('pass_through:' + pass_through);
  I.BallastLessThanPassthrough(simplified_ballast, pass_through);
  
});

Scenario('Verify that a list of options to choose from after ballast consolidation is provided/added @T201192', function*(I) {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballasting%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 60, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.see('Simplified Ballast',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(2)'});
  I.see('Low Ballast Weight',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(2)'});
  I.see('No Anchors',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(2)'});
  I.see('Pass-Through',{css: 'body > div > form > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(2)'});
  let Low_Ballast_Weight = yield I.grabTextFrom('body > div > form > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(3)');  
  I.say('Low_Ballast_Weight: ' + Low_Ballast_Weight);
  let pass_through = yield I.grabTextFrom('body > div > form > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(3)');  
  I.say('pass_through: ' + pass_through);
  I.BallastLessThanPassthrough(Low_Ballast_Weight, pass_through);
});


Scenario('Verify the new process flow: Aurora & AutoCAD file input location @T201193', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=New%20&%20Legacy&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_96_small.dxf')
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})    
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'})
   
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=New%20&%20Legacy&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.attachFile('#file_upload', 'DataFile/HDT_CADoutput_Coord_test 1_346.txt')
  I.click('#nextButton');     
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'})   
   
});

Scenario('Verify that example Calculations in the output report for uplift that are specific to the site is provided @T201194', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Summary%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});
}); 
  
Scenario('Verify that the text summary of new ballast table is sent to doc gen service for pdf report output @T201195', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=PDF%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=600&building_length=1500&building_parapet_height=0&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Ushape.dxf')  
  I.click('#nextButton');
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});
  I.openNewTab();  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/debug-documentation');  
  I.see('"ballasting_method_string"',{css: 'body > pre'});
  I.closeCurrentTab();
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'}) 
  I.click('body > div > div:nth-child(5) > a > button');  
}); 
    

  
  
 
