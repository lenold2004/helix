Feature('Batch 7: CPP Post Processing');

Before((I) => { // or Background
  I.amOnPage('/');
});

Scenario('Add anchors for lateral force resistance. - Visualization in the array summary - to show up in beige in the array summary tab @C100382', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=HDT&system_type=1&module_type=96%20Cell&building_height=2000.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  //I.selectOption('#spacing_config', 'New Spacing');
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_96_Church.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});      
  I.click('#all_overlay'); 
  I.click('#increase_zoom > i');   
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/panels'); 
  I.see('"id": 116','body > pre')
  I.see('"wind_sliding_anchors"','body > pre')  
}); 

Scenario('Add anchors for lateral force resistance - report in the wind @C100384', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=PDF%20-%20Demand%20per%20Anchor&system_type=1&module_type=96%20Cell&building_height=1500.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=130&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');    
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_96_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})
  I.selectOption('#inverter_brand_id', 'SMA')  
  I.click('#add_standalone_inverter'); 
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input')
  I.see('24kW SMA Tripower - 523922',{css: 'body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)'})
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'}) 
  I.click('body > div > div.panel-buttons > a:nth-child(2)'); 
}); 

Scenario('Trays aren\'t rendering on the Anchor and ballast report @C166394', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Trays%20Rendering&system_type=1&module_type=96%20Cell&building_height=35.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Demo_HDT_96_14_degree.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 120, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})  
  I.click('#nextButton');     
  I.see('Download',{css: 'body > div > div.form_section > h3'}) 
  I.click('body > div > div:nth-child(5) > a > button'); 
}); 

Scenario('Update part names @C166397', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Part%20Names%20Update&system_type=0&module_type=P-Series&building_height=200.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HST_PSeries_950kW.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 180, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})    
  I.selectOption('#inverter_brand_id', 'SMA')  
  I.click('#add_new_power_station');   
  I.click('#power_station_form > div.ebom_subsection.submit > input')  
  I.see('Power Station 1','body > div > div.form_section > div > div:nth-child(6) > table > tbody > tr.alternating_row_color > td:nth-child(1)')  
  I.click('#add_standalone_inverter');   
  I.selectOption('#inverter-model', '12kW SMA Tripower - 523923')
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input'); 
  I.click('#add_standalone_inverter');   
  I.selectOption('#inverter-model', '15kW SMA Tripower - 523924')
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input');   
  I.click('#add_standalone_inverter');   
  I.selectOption('#inverter-model', '20kW SMA Tripower - 523921')
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input');  
  I.click('#add_standalone_inverter');   
  I.selectOption('#inverter-model', '24kW SMA Tripower - 523922')
  I.click('#standalone_inverter_form > div.ebom_subsection.submit > input');  
  I.click('#add_supervisor_monitor');   
  I.see('Switch Gear/External','#power_source') 
  I.click('#supervisor_monitor_form > div.ebom_subsection.submit > input');     
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div:nth-child(6) > a > button');  
  I.click('body > div > div:nth-child(5) > a > button');
  I.amInPath('Downloads');
  I.seeFile('part_names_update_bom.txt');    
  I.seeInThisFile('520301	REAR SKIRT, HELIX ROOF V1.1');
  I.seeInThisFile('520302	SPOILER, SINGLE TILT, HELIX ROOF V1.1');
  I.seeInThisFile('520303	FRONT SKIRT, HELIX ROOF V1.1');
  I.seeInThisFile('520306	TRAY, OPTIONAL BALLAST, HELIX ROOF V1.1');
  I.seeInThisFile('521797	LINK TO ARRAY, SHORT, INVERTER RACK, HELIX ROOF V1.1');
  I.seeInThisFile('521798	LINK TO ARRAY, LONG, INVERTER RACK, HELIX ROOF V1.1');  
}); 

Scenario('Make the Arrray word in the cover page - much smaller @C166398', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Array%20Names%20on%20Cover%20Page&system_type=1&module_type=96%20Cell&building_height=36&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/HDT_96_Church.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 240, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
//  I.click('body > div > div:nth-child(6) > a > button');    
}); 

Scenario('Anchors not showing on Anchor and Ballast plan pdf report - HDT @C166396', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=HDT%20Anchor%20Placement&system_type=1&module_type=96%20Cell&building_height=35.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'Old spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Demo_HDT_96_14_degree.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 300, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});  
  I.click('#tray_level_overlay');
  I.click('#increase_zoom > i');  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div.panel-buttons > a:nth-child(2)');    
}); 

Scenario('Add legend & Array name and Symbol at the output image (bottom right) HST and HDT @C166399', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=HST%20Array%20Name%20and%20Legend&system_type=0&module_type=96%20Cell&building_height=36&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/MME_Aurora_HST_96_New.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 300, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});    
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div.panel-buttons > a:nth-child(4)');    
}); 

Scenario('Update BOM with tray level info @C166401', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=Tray%20Level%20Info%20in%20BOM&system_type=0&module_type=96%20Cell&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HST_96_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 300, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});   
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/trays');
  I.closeCurrentTab();  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div.panel-buttons > a:nth-child(3)');  
  I.wait(5);  
  I.click('body > div > div.panel-buttons > a:nth-child(2)'); 
  I.wait(5);
  I.amInPath('Downloads');
  I.seeFile('tray_level_info_in_bom_bom.txt'); 
  I.seeInThisFile('513831	CHASSIS, SINGLE TILT, HELIX ROOF');    
  I.seeFile('tray_level_info_in_bom_documentation.pdf');    
}); 

Scenario('Update BOM with tray level info @C166401', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=Tray%20Level%20Info%20in%20BOM&system_type=1&module_type=96%20Cell&building_height=36.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_96_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 300, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});   
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/trays');
  I.closeCurrentTab();  
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div.panel-buttons > a:nth-child(3)');  
  I.wait(5);  
  I.click('body > div > div.panel-buttons > a:nth-child(2)'); 
  I.wait(5);
  I.amInPath('Downloads');
  I.seeFile('tray_level_info_in_bom_bom (1).txt'); 
  I.seeInThisFile('514056	BASE, CHASSIS, DUAL TILT, HELIX ROOF');    
  I.seeInThisFile('514057	PLATFORM, CHASSIS, DUAL TILT, HELIX ROOF');    
  I.seeFile('tray_level_info_in_bom_documentation (1).pdf');    
}); 


Scenario('Update pdf values for wind lateral loads @C166403', (I) => {  
  I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Wind%20Lateral%20Loads%20in%20PDF&system_type=1&module_type=P-Series&building_height=1500.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=130&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_P_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.waitForText('- All ballasting methods were calculated.', 300, {css: 'body > div > div.summary_warning_wrapper > div > div'});
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});    
  I.click('#nextButton'); 
  I.see('e-BOS',{css: 'body > div > div.form_section > h3'})         
  I.click('#nextButton'); 
  I.see('Download',{css: 'body > div > div.form_section > h3'})  
  I.click('body > div > div:nth-child(5) > a > button');  
  I.wait(5);
  I.amInPath('Downloads');
  I.seeFile('wind_lateral_loads_in_pdf_documentation.pdf');      
}); 


Scenario('Notify the user which modules or module pairs have wind uplift which exceeds the UL 2703 rating - CPP - Warning @C166404', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=CPP%20warning&system_type=1&module_type=96%20Cell&building_height=1500.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=130&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_96_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/cpp-exchange');
  I.see('"id":','body > pre'); 
  I.see('"pressure_for_lifting":','body > pre');
  I.closeCurrentTab();      
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});   
  I.waitForText('- There are modules that exceed the UL2703 rating, please check the array visualization and proceed with caution', 120, 'body > div > div.summary_warning_wrapper > div > div');     
}); 

Scenario('Notify the user which modules or module pairs have wind uplift which exceeds the UL 2703 rating - CPP - Warning @C166404', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=CPP%20warning&system_type=1&module_type=96%20Cell&building_height=1500.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=130&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.selectOption('#module_type', '128 Cell')
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_128_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/cpp-exchange');
  I.see('"id":','body > pre'); 
  I.see('"pressure_for_lifting":','body > pre');
  I.closeCurrentTab();      
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});   
  I.waitForText('- There are modules that exceed the UL2703 rating, please check the array visualization and proceed with caution', 120, 'body > div > div.summary_warning_wrapper > div > div');       
}); 

Scenario('Notify the user which modules or module pairs have wind uplift which exceeds the UL 2703 rating - CPP - Warning @C166404', (I) => {  
  I.amOnPage('http://sp-helix-dev.herokuapp.com/site_characterization/?project_name=CPP%20warning&system_type=1&module_type=96%20Cell&building_height=1500.0&building_width=200.0&building_length=200.0&building_parapet_height=2.0&wind_speed=130&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.selectOption('#module_type', 'P-Series')
  I.see('Project Information',{css: 'body > div > form > div:nth-child(2) > h3'})
  I.click('body > div > form > div.submit.navigation_buttons > input');  
  I.selectOption('#spacing_config', 'New spacing')
  I.attachFile('#gradient_dxf_upload', 'DataFile/Aurora_HDT_P_Vertical_6.dxf');  
  I.click('#nextButton');    
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});  
  I.openNewTab();
  I.amOnPage('http://sp-helix-dev.herokuapp.com/qa/cpp-exchange');
  I.see('"id":','body > pre'); 
  I.see('"pressure_for_lifting":','body > pre');
  I.closeCurrentTab();      
  I.click('#nextButton'); 
  I.see('Summary',{css: 'body > div > div.form_section > h3:nth-child(1)'});    
  I.click('#nextButton'); 
  I.see('Array Information',{css: 'body > div > div:nth-child(4) > h3'});   
  I.waitForText('- There are modules that exceed the UL2703 rating, please check the array visualization and proceed with caution', 120, 'body > div > div.summary_warning_wrapper > div > div');       
}); 





