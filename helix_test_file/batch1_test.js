
Feature('Batch 1: Bugs');

Before((I) => { // or Background
  I.amOnPage('/');
});

Scenario('Verify that the Ethernet plug is added to SMA Standalone inverters @T201161', (I) => { 	
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
  I.selectOption('#inverter_brand_id', 'SMA')  
  I.click('#add_standalone_inverter'); 
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')
  I.see('24kW SMA Tripower - 523922',{css: 'body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div:nth-child(6) > a > button');
  I.wait(5);    
  I.amInPath('Downloads');     
  I.seeFile('sma_ethernet_plug_test_bom.txt');   
  I.seeInThisFile('518058	CONNECTOR, ETHERNET, PLUG, RJ-45, WEATHERPROOF, SHIELDED');
 
});
Scenario('Verify that the mounting parts for the monitoring units are removed in all Delta systems (HST) @T201162', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HST%20Delta%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')
  I.see('60kW Delta - 524954',{css: 'body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div:nth-child(6) > a > button')  
  I.wait(5);
  I.amInPath('Downloads');
  I.seeFile('hst_delta_test_bom.txt');   
  I.dontSeeInThisFile('104813	WASHER, FLAT, 3/8, .812 OD, 18-8 SS');
  I.dontSeeInThisFile('106925	NUT, CHANNEL, 3/8-16, SS, UNISTRUT P3008');
  I.dontSeeInThisFile('107551	NUT, HEX, 3/8-16, 18-8 SS');
  I.dontSeeInThisFile('512660	FRONT LEG, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512661	BACK LEGS, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512662	LINK TO ARRAY, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512663	RAIL, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('514865	BOLT, HH, 3/8-16 X 1/2, 18-8 SS');
  I.dontSeeInThisFile('518331	MOUNTING BACK PLATE, INVERTER/PANEL BOARD, HELIX ROOF/TRACKER');
  I.seeInThisFile('514265	FOOT, RECYCLED RUBBER, HELIX ROOF');   
});

Scenario('Verify that the Ethernet plug is added to SMA Standalone inverters @T201168', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HDT%20Delta%20Test&system_type=1&module_type=128%20Cell&building_height=75&building_width=500&building_length=500&building_parapet_height=5&wind_speed=150&exposure_category=D&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_128_small.dxf')
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')  
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')  
  I.click('#nextButton');  
  I.see('Download',{css: 'body > div > div.form_section > h3'});   
  I.click('body > div > div:nth-child(6) > a > button');
  I.wait(5); 
  I.click('body > div > div.navigation_buttons > a');
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)');    
  I.click('#nextButton');  
  I.click('body > div > div:nth-child(6) > a > button');
  I.wait(5); 
  I.amInPath('Downloads');
  I.seeFile('hdt_delta_test_bom.txt');   
  I.dontSeeInThisFile('106925	NUT, CHANNEL, 3/8-16, SS, UNISTRUT P3008');
  I.dontSeeInThisFile('107551	NUT, HEX, 3/8-16, 18-8 SS');
  I.dontSeeInThisFile('512660	FRONT LEG, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512661	BACK LEGS, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512662	LINK TO ARRAY, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512663	RAIL, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('514865	BOLT, HH, 3/8-16 X 1/2, 18-8 SS');
  I.dontSeeInThisFile('518331	MOUNTING BACK PLATE, INVERTER/PANEL BOARD, HELIX ROOF/TRACKER');
  I.seeFile('hdt_delta_test_bom (1).txt');   
  I.dontSeeInThisFile('106925	NUT, CHANNEL, 3/8-16, SS, UNISTRUT P3008');
  I.dontSeeInThisFile('107551	NUT, HEX, 3/8-16, 18-8 SS');
  I.dontSeeInThisFile('512660	FRONT LEG, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512661	BACK LEGS, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512662	LINK TO ARRAY, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('512663	RAIL, INVERTER RACK, HELIX ROOF');
  I.dontSeeInThisFile('514865	BOLT, HH, 3/8-16 X 1/2, 18-8 SS');
  I.dontSeeInThisFile('518331	MOUNTING BACK PLATE, INVERTER/PANEL BOARD, HELIX ROOF/TRACKER');
});


Scenario('Verify that an error message is displayed if a system data file with spacing issue is uploaded @T201163', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=System%20Overload%20Test&system_type=1&module_type=96%20Cell&building_height=53.0&building_width=266.0&building_length=176.0&building_parapet_height=3.0&wind_speed=110&exposure_category=B&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.2&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.attachFile('#file_upload', 'DataFile/Out of CAD - Building 8_Rev 6.txt')
  I.click('#nextButton');
  I.see('- Invalid input file: a subarray has disconnected panels.',{css: 'body > div > div.summary_warning_wrapper > div > div'})  
});


Scenario('Verify that no RJ45 Connectors are added to Delta systems (HST)  @T201164', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HST%20Delta-Monitoring%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_96_large.dxf')
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')  
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')    
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)');    
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'});   
  I.click('body > div > div:nth-child(6) > a > button');
  I.wait(5);   
  I.amInPath('Downloads');
  I.seeFile('hst_delta-monitoring_test_bom.txt');    
  I.seeInThisFile('517463	MONITORING SYSTEM, COMMERCIAL, PVS5x BASED, 240VAC, US	1');  
});

Scenario('Verify that no RJ45 Connectors are added to Delta systems (HDT)   @T201169', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HDT%20Delta-Monitoring%20Test&system_type=1&module_type=128%20Cell&building_height=75&building_width=500&building_length=500&building_parapet_height=5&wind_speed=150&exposure_category=D&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_128_small.dxf')
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')  
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')    
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)');    
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'});   
  I.click('body > div > div:nth-child(6) > a > button');
  I.wait(5);   
  I.amInPath('Downloads');
  I.seeFile('hdt_delta-monitoring_test_bom.txt');    
  I.seeInThisFile('517463	MONITORING SYSTEM, COMMERCIAL, PVS5x BASED, 240VAC, US	1');  
});

Scenario('Verify that the Part sum is displayed correctly in PDF for 524781 and 525772 (HST)   @T201166', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HST%20PDF%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')  
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')    
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)');    
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'});   
  I.click('body > div > div:nth-child(5) > a > button');
  I.wait(5);   
  I.amInPath('Downloads');
  I.seeFile('hst_pdf_test_documentation.pdf');    
  //I.seeInThisFile('517463	MONITORING SYSTEM, COMMERCIAL, PVS5x BASED, 240VAC, US	1');  
});

Scenario('Verify that the Part sum is displayed correctly in PDF for 524781 and 525772 (HDT)   @T201170', (I) => { 	
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HDT%20PDF%20Test&system_type=1&module_type=128%20Cell&building_height=75&building_width=500&building_length=500&building_parapet_height=5&wind_speed=150&exposure_category=D&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_128_small.dxf')
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
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')  
  I.see('60kW Delta - 524954','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)')    
  I.click('#add_supervisor_monitor');
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(9) > table > tbody > tr.alternating_row_color > td:nth-child(1)');    
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'});   
  I.click('body > div > div:nth-child(5) > a > button');
  I.wait(5);   
  I.amInPath('Downloads');
  I.seeFile('hdt_pdf_test_documentation.pdf'); 
  //I.seeInThisFile('517463	MONITORING SYSTEM, COMMERCIAL, PVS5x BASED, 240VAC, US	1');  
});





