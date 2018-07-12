Feature('Batch 4: Integration of Delta Inverters');

Before((I) => { // or Background
  I.amOnPage('/');
});

Scenario('Inverter Brand selector should store the value selected even after refresh @T201239', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta')
  I.seeCheckboxIsChecked('#inverter_brand_id > option:nth-child(2)');
  I.pressKey('F5')
  I.seeCheckboxIsChecked('#inverter_brand_id > option:nth-child(2)');
});


Scenario('Selecting "Delta" removes Power Stations section as a whole @T201240', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_96_small.dxf')
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
  I.selectOption('#inverter_brand_id', 'Delta')
  I.dontSee('Power Stations','body > div > div.form_section > div > div:nth-child(4) > div:nth-child(1)')
  I.dontSee('No Power Stations have been added yet','body > div > div.form_section > div > div:nth-child(6)')
});

Scenario('Selecting "Delta" changes the types of inverter inside standalone inverters (should be 36,42,60,80kW) @T201241', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_96_small.dxf')
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})  
  I.selectOption('#inverter_brand_id', 'Delta')
  I.click('#add_standalone_inverter'); 
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length')
  I.click('#inverter-model')
  I.see('36kW Delta - 524952','#inverter-model > option:nth-child(1)')
  I.see('42kW Delta - 524969','#inverter-model > option:nth-child(2)')
  I.see('60kW Delta - 524954','#inverter-model > option:nth-child(3)')
  I.see('80kW Delta - 527588','#inverter-model > option:nth-child(4)')  
});

Scenario('Selecting "Delta" allows only a single attachment point (switch gear) @T201242', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_96_small.dxf')
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})  
  I.selectOption('#inverter_brand_id', 'Delta')
  I.click('#add_standalone_inverter'); 
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length')  
  I.selectOption('#inverter-model', '60kW Delta - 524954')  
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')
});

Scenario('Selecting "Delta" allows only a single attachment point (switch gear) @T201243', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
	I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_96_small.dxf')
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'})  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'})    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'})      
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})  
  I.selectOption('#inverter_brand_id', 'Delta')
  I.click('#add_standalone_inverter'); 
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length')  
  I.selectOption('#inverter-model', '60kW Delta - 524954')  
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')
  I.click('#add_supervisor_monitor')
  I.seeElement('#power_source')
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input')
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)')
});

Scenario('Selecting "SMA" should show only strings between 2 and 8  @T201244', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'SMA');
  I.click('#add_new_power_station');
  I.seeElement('#power_station_description');
  I.seeElement('#power_station_quantity');
  I.seeElement('#ac_run_length');
  I.seeElement('#inverter_1-model');
  I.see('2','#inverter_1-strings_per_inverter > option:nth-child(1)');
  I.see('3','#inverter_1-strings_per_inverter > option:nth-child(2)');
  I.see('4','#inverter_1-strings_per_inverter > option:nth-child(3)');
  I.see('5','#inverter_1-strings_per_inverter > option:nth-child(4)');
  I.see('6','#inverter_1-strings_per_inverter > option:nth-child(5)');
  I.see('7','#inverter_1-strings_per_inverter > option:nth-child(6)');
  I.see('8','#inverter_1-strings_per_inverter > option:nth-child(7)');  
});

Scenario('Selecting "SMA" inverter should automatically change the string  @T201245', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'SMA');
  I.click('#add_new_power_station');
  I.seeElement('#power_station_description');
  I.seeElement('#power_station_quantity');
  I.seeElement('#ac_run_length');
  I.seeElement('#inverter_1-model');
  I.selectOption('#inverter_1-model','12kW SMA Tripower - 523923');
  I.see('4','#inverter_1-strings_per_inverter > option:nth-child(3)');
  I.selectOption('#inverter_1-model','15kW SMA Tripower - 523924');
  I.see('5','#inverter_1-strings_per_inverter > option:nth-child(4)');
  I.selectOption('#inverter_1-model','20kW SMA Tripower - 523921');
  I.see('6','#inverter_1-strings_per_inverter > option:nth-child(5)');
  I.selectOption('#inverter_1-model','24kW SMA Tripower - 523922');
  I.see('8','#inverter_1-strings_per_inverter > option:nth-child(7)');
});

Scenario('Selecting "Delta" should hide strings, sun shade and dc switch  @T201246', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); 
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length')  
  I.selectOption('#inverter-model', '60kW Delta - 524954')    
  I.dontSeeElement('#inverter_1-strings_per_inverter');
  I.dontSeeElement('#inverter_1-dc_switch_row > label');
});

Scenario('Data under "SMA" should be cleared when you switch to "Delta"  @T201247', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'SMA');
  I.click('#add_new_power_station'); //Add
  I.seeElement('#power_station_description');
  I.seeElement('#power_station_quantity');
  I.seeElement('#ac_run_length');
  I.seeElement('#inverter_1-model');
  I.click('#power_station_form > div.ebom_subsection.submit > input');
  I.click('#add_standalone_inverter');
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length')
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input');
  I.see('24kW SMA Tripower - 523922','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)')
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(12) > table > tbody > tr.alternating_row_color > td:nth-child(1)')
  I.selectOption('#inverter_brand_id', 'Delta');
  I.see('No Inverters have been added yet.','body > div > div.form_section > div > div:nth-child(6)');
  I.see('No Supervisor Monitors have been added yet.','body > div > div.form_section > div > div:nth-child(9)');
});


Scenario('Data under "Delta" should be cleared when you switch to "SMA"  @T201253', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length') 
  I.selectOption('#inverter-model', '60kW Delta - 524954') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.selectOption('#inverter_brand_id', 'SMA');
  I.see('No Power Stations have been added yet.','body > div > div.form_section > div > div:nth-child(6) > div');
  I.see('No Standalone Inverters have been added yet.','body > div > div.form_section > div > div:nth-child(9)');
});

Scenario('New parts added for inverters  @T201248', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
	I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length') 
  I.selectOption('#inverter-model', '36kW Delta - 524952') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '42kW Delta - 524969') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '60kW Delta - 524954') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.see('36kW Delta - 524952','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(1)')
  I.see('42kW Delta - 524969','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(1)')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(1)')
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.click('#nextButton');
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('sma_ethernet_plug_test_bom.txt');
  I.seeInThisFile('524952	INVERTER, DELTA, M36U_122(MC4), 10INPUT, 36KW, 3PH 480V AC,1000V DC');
  I.seeInThisFile('524969	INVERTER, DELTA, M42U_122(MC4), 12INPUT, 42KW, 3PH 480V AC,1000V DC');
  I.seeInThisFile('524954	INVERTER, DELTA, M60U_122 (MC4), 18INPUT, 60KW, 3PH 480V AC,1000V DC');
});

Scenario('If single tilt was selected in the first view, then BOM should contain part #524781  @T201249', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20Ethernet%20Plug%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length') 
  I.selectOption('#inverter-model', '36kW Delta - 524952') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '42kW Delta - 524969') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '60kW Delta - 524954') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.see('36kW Delta - 524952','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(1)')
  I.see('42kW Delta - 524969','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(1)')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(1)')
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.click('#nextButton');
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('sma_ethernet_plug_test_bom (1).txt');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF');  
});

Scenario('If dual tilt was selected then BOM should contain part #525772  @T201250', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Tray%20Level%20Info%20in%20BOM&system_type=1&module_type=96%20Cell&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HDT_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length') 
  I.selectOption('#inverter-model', '36kW Delta - 524952') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '42kW Delta - 524969') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '60kW Delta - 524954') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.see('36kW Delta - 524952','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(1)')
  I.see('42kW Delta - 524969','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(1)')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(1)')
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.click('#nextButton');
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('tray_level_info_in_bom_bom.txt');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF');  
});

Scenario('Verify that BOM parts should not appear with Delta inverters  @T201251', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=BOM%20Parts%20Should%20Not%20Appear&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.seeElement('#inverter-quantity ')
  I.seeElement('#inverter-model')
  I.seeElement('#standalone_ac_run_length') 
  I.selectOption('#inverter-model', '36kW Delta - 524952') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '42kW Delta - 524969') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.click('#add_standalone_inverter'); //+ inverter
  I.selectOption('#inverter-model', '60kW Delta - 524954') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  I.see('36kW Delta - 524952','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(2) > td:nth-child(1)')
  I.see('42kW Delta - 524969','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(3) > td:nth-child(1)')
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr:nth-child(4) > td:nth-child(1)')
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.click('#nextButton');
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('bom_parts_should_not_appear_bom.txt');
  I.dontSeeInThisFile('105317');  
  I.dontSeeInThisFile('107538');  
  I.dontSeeInThisFile('513586');
  I.dontSeeInThisFile('514865');
  I.dontSeeInThisFile('111147');
  I.dontSeeInThisFile('521798');
  I.dontSeeInThisFile('521797');
  I.dontSeeInThisFile('515059');
});

Scenario('Ensure SMA keeps the parts that are not visible in Delta  @T201252', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=SMA%20keeps%20the%20parts&system_type=1&module_type=96%20Cell&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HDT_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);  
  I.selectOption('#inverter_brand_id', 'SMA');
  I.click('#add_new_power_station'); //+ Add power station
  I.seeElement('#power_station_description');
  I.seeElement('#power_station_quantity');
  I.seeElement('#ac_run_length');
  I.seeElement('#inverter_1-model');
  I.click('#power_station_form > div.ebom_subsection.submit > input'); //Add
  I.click('#add_standalone_inverter'); //+ Add standalone inverter
  I.selectOption('#inverter-model', '24kW SMA Tripower - 523922') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input'); // Add
  I.click('#add_supervisor_monitor'); //+ Add Monitoring
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input'); // Add
  I.click('#nextButton');
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('sma_keeps_the_parts_bom.txt');
  I.seeInThisFile('105317	WASHER, STAR, #6, SS (1501-606)');
  I.seeInThisFile('107538	SCREW, PH, 6-32 X 1/2, SS (5100-073)');
  I.seeInThisFile('513586	BRACKET, INVERTER AC SWITCH, HELIX');
  I.seeInThisFile('514865	BOLT, HH, 3/8-16 X 1/2, 18-8 SS');
  I.seeInThisFile('111147	WASHER, FLAT, #6, 18-8 SS (1509-097)');
  I.seeInThisFile('515059	ASSY, WHIP TRAY W/FUSE CLIPS, INVERTER, HELIX');
  I.seeInThisFile('512662	LINK TO ARRAY, INVERTER RACK, HELIX ROOF');
});

Scenario('Verify that the Delta inverter BOM parts are updated   @T201254', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Verify%20that%20the%20Delta%20inverter%20BOM%20parts%20are%20updated&system_type=1&module_type=96%20Cell&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HDT_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);  
  
  I.selectedInverterBrandDelta('36kW Delta - 524952',1)  
  I.click('#nextButton');  
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF');
  I.seeInThisFile('526399	KIT, AC SPLICE AND DC COMBINER MOUNT, DELTA, HELIX ROOF');
  I.seeInThisFile('527809	KIT, AC SPLICE BOX, DELTA, HELIX ROOF, 300 KCMIL');
  I.deleteBomFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.click('body > div > div.navigation_buttons > a'); //back button
  
  I.selectOption('#inverter_brand_id', 'SMA'); //clear selected delta inverters
  I.selectedInverterBrandDelta('80kW Delta - 527588',1)        
  I.click('#nextButton');    
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.seeInThisFile('526399	KIT, AC SPLICE AND DC COMBINER MOUNT, DELTA, HELIX ROOF	1');  
  I.deleteBomFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.click('body > div > div.navigation_buttons > a'); //back button
  
  I.selectOption('#inverter_brand_id', 'SMA'); //clear selected delta inverters
  I.selectedInverterBrandDelta('42kW Delta - 524969',1) 
  I.click('#nextButton');    
  I.downloadBomTextFile() 
  I.amInPath('Downloads');
  I.seeFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF');
  I.seeInThisFile('527993	KIT, 2" CONDUIT, AC SPLICE, DELTA, HELIX ROOF	1');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF	1');
  I.deleteBomFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.click('body > div > div.navigation_buttons > a'); //back button
  
  I.selectOption('#inverter_brand_id', 'SMA'); //clear selected delta inverters
  I.selectedInverterBrandDelta('60kW Delta - 524954',1)
  I.click('#nextButton');    
  I.downloadBomTextFile() 
  I.amInPath('Downloads');
  I.seeFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF');
  I.seeInThisFile('527992	KIT, 2.5" CONDUIT, AC SPLICE, DELTA, HELIX ROOF	1');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF	1');
  I.deleteBomFile('verify_that_the_delta_inverter_bom_parts_are_updated_bom.txt');
  
  I.click('body > div > div.navigation_buttons > a'); //back button
  
});

Scenario('Verify that two 80kW Delta inverters are added to UI and BOM P-Series Dual Tilt  @T201255', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=verify%20that%20two%2080kW%20Delta&system_type=1&module_type=P-Series&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HDT_P_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);  
  
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.see('36kW Delta - 524952','#inverter-model > option:nth-child(1)');
  I.see('42kW Delta - 524969','#inverter-model > option:nth-child(2)');
  I.see('60kW Delta - 524954','#inverter-model > option:nth-child(3)');
  I.see('80kW Delta - 524955','#inverter-model > option:nth-child(4)');
  I.selectOption('#inverter-model', '80kW Delta - 524955') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  
  I.click('#nextButton');  
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('verify_that_two_80kw_delta_bom.txt');
  I.seeInThisFile('524955	INVERTER, DELTA, M80U_122 (MC4), 18INPUT, 80KW, 3PH 480V AC,1000V DC, 10-YR WRTY	1');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF	1');
  I.seeInThisFile('527992	KIT, 2.5" CONDUIT, AC SPLICE, DELTA, HELIX ROOF	1');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF	21');  
  I.deleteBomFile('verify_that_two_80kw_delta_bom.txt');
});

Scenario('Verify that two 80kW Delta inverters are added to UI and BOM P-Series Single Tilt  @T201255', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=verify%20that%20two%2080kW%20Delta&system_type=0&module_type=P-Series&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');	 
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_P_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);  
  
  I.selectOption('#inverter_brand_id', 'Delta');
  I.click('#add_standalone_inverter'); //+ inverter
  I.see('36kW Delta - 524952','#inverter-model > option:nth-child(1)');
  I.see('42kW Delta - 524969','#inverter-model > option:nth-child(2)');
  I.see('60kW Delta - 524954','#inverter-model > option:nth-child(3)');
  I.see('80kW Delta - 524955','#inverter-model > option:nth-child(4)');
  I.selectOption('#inverter-model', '80kW Delta - 524955') //Select
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input') //Add
  
  I.click('#nextButton');  
  I.downloadBomTextFile()  //I.click('body > div > div:nth-child(6) > a > button');
  I.amInPath('Downloads');
  I.seeFile('verify_that_two_80kw_delta_bom.txt');
  I.seeInThisFile('524955	INVERTER, DELTA, M80U_122 (MC4), 18INPUT, 80KW, 3PH 480V AC,1000V DC, 10-YR WRTY	1');
  I.seeInThisFile('527073	KIT, INVERTER MOUNT, DELTA, HELIX ROOF	1');
  I.seeInThisFile('527992	KIT, 2.5" CONDUIT, AC SPLICE, DELTA, HELIX ROOF	1');
  I.seeInThisFile('525545	INVERTER LINK, EXTENSION, DELTA, HELIX ROOF');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF');
  I.deleteBomFile('verify_that_two_80kw_delta_bom.txt');
});















