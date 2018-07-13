Feature('Batch 5: Enhancements and Hotfix');

Before((I) => { // or Background
  I.amOnPage('/');
});

Scenario('Verify that ballast strap are added to north spoiler on HST systems @T201270', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Ballast%20Strap%20Test&system_type=0&module_type=128%20Cell&building_height=36.0&building_width=150.0&building_length=150.0&building_parapet_height=4.0&wind_speed=115&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_128_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(1);
  I.seeDownloadPage();
  I.downloadBomTextFile();
  I.amInPath('Downloads');
  I.seeFile('ballast_strap_test_bom.txt');
  I.seeInThisFile('523310	SPOILER BALLAST STRAP, HELIX ROOF	8');
  I.downloadPdfFile();
  //I.seeFile('ballast_strap_test_documentation.pdf');
});

Scenario('Verify that Psf is properly displayed on the visualization @T201272', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=PSF%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=77.50&building_length=227.66&building_parapet_height=1&wind_speed=115&exposure_category=B&exposure_category_transition_distance=0&ballast_block_weight=16&max_system_pressure=16&anchor_type=EcoFasten%20Eco%2065&design_spectral_response=0.29&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Rev-D.dxf',1);
  I.seeBallastingMethodPage(0);
  I.seeCheckboxIsChecked('body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(1) > input[type="radio"]');
  I.see('Simplified Ballast','body > div > form > div.form_section > table > tbody > tr:nth-child(1) > td:nth-child(2)');
  I.click('#nextButton');
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(0);
  I.click('#increase_zoom > i');
  I.click('#increase_zoom > i');
  I.click('#increase_zoom > i');
  I.click('#increase_zoom > i');  //zoom 67%
  I.click('#all_overlay'); // click ALL
});

Scenario('Verify that the "Max System Weight Ballast Block" and "Max Possible System Weight" have been removed in the Array Summary page @T201273', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Max%20System%20Weight%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(0);
  I.dontSee('Max System Weight Ballast Block');
  I.dontSee('Max Possible System Weight');
  I.click('#nextButton');
  I.seePowerStationConfigurationPage(1);
  I.seeDownloadPage();
  I.downloadPdfFile();
});
 
Scenario('Save CPP and visualization data to DB @T201274', function*(I)  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=DB%20Test&system_type=1&module_type=96%20Cell&building_height=35&building_width=250&building_length=250&building_parapet_height=1&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Lshape.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(0);
  let total_system_weigth_1 = yield I.grabTextFrom('body > div > div:nth-child(4) > div > div.array_summary > div:nth-child(1) > span.item_body');
  I.say("Get total_system_weigth before refresh the page " + total_system_weigth_1);
  I.wait(60);
  I.say('wait 60 secs and refresh the page');
  I.pressKey('F5')
  let total_system_weigth_2 = yield I.grabTextFrom('body > div > div:nth-child(4) > div > div.array_summary > div:nth-child(1) > span.item_body');
  I.say("Get total_system_weigth after refresh the page " +  total_system_weigth_2);
  I.checkIfDataIsSave(total_system_weigth_1,total_system_weigth_2);
});

Scenario('Take out the Power station option from monitoring for SMA @T201278', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Power%20Station%20Removal%20Test&system_type=0&module_type=96%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_96_small.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(0);
  I.selectedInverterBrandSma();
  I.addFromPowerStation(1);
  I.see('Power Station 1','body > div > div.form_section > div > div.form_section > table > tbody > tr.alternating_row_color > td:nth-child(1)');
  I.addFromMonitoring(1);
  I.see('Switch Gear/External','body > div > div.form_section > div > div:nth-child(12) > table > tbody > tr.alternating_row_color > td:nth-child(1)');
});

Scenario('Display bug, lateral compensation repeated 24 times  @T201280', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Error%20Message%20Test&system_type=0&module_type=96%20Cell&building_height=100&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=40&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Wayne PAL, HST_96_rotated.dxf',1);
  I.see('Ballasting Method',{css: 'body > div > form > div.form_section > h3'});
  I.waitForText('- System was not capable to compensate the sliding pressure. 22 ballast blocks were not added to the subarray: 4', 60, 'body > div > div.summary_warning_wrapper > div > div');
  
});

Scenario('Prevent users from advancing when the request fails  @T201281', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Failed%20CPP%20Request%20Test&system_type=1&module_type=96%20Cell&building_height=30&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/96_HDT_example.dxf',1);
  I.seeBallastingMethodPage(0);  
});

Scenario('Store panel results of the ballasting methods to DB  @T201282', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=DB%20Test&system_type=1&module_type=96%20Cell&building_height=35&building_width=250&building_length=250&building_parapet_height=1&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Lshape-dxf.1516129689458.dxf',1);
  I.seeBallastingMethodPage(0);
  I.say('  I wait and idle for 60 secs then refresh the page');
  I.wait(60);
  I.pressKey('F5');
  I.seeBallastingMethodPage(0);
});

Scenario('Reroute calculation flow as request preparation takes longer than expected  @T201283', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Macys%20Test&system_type=0&module_type=96%20Cell&building_height=36&building_width=250&building_length=35&building_parapet_height=1&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=40&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Macys.dxf',1);
  I.seeBallastingMethodPage(0);
  
});

Scenario('Start saving the requests/responses in our database for Helix calculator  @T201284', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Requests/responses%20Test&system_type=1&module_type=96%20Cell&building_height=35&building_width=250&building_length=250&building_parapet_height=1&wind_speed=110&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/Lshape-dxf.1516129689458.dxf',1);
  I.seeBallastingMethodPage(0);  
  I.openNewTabAndLoadPage('http://sp-helix-staging.herokuapp.com/qa/cpp-exchange');
  I.wait(3)
  I.openNewTabAndLoadPage('http://sp-helix-staging.herokuapp.com/cpp/panels-pressure-from-cpp?product_id=102');  
  I.wait(3);
});


Scenario('New Spacing Detection values  @T201286', (I) =>  { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Spacing%20Test&system_type=1&module_type=96%20Cell&building_height=36&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');	
	I.seeProjectInformationPage(1);
	I.see('New spacing','#spacing_config > option:nth-child(1)');
	I.see('Old spacing','#spacing_config > option:nth-child(2)');
	I.uploadDxfFileNewSpacing('DataFile/Lshape-dxf.1516129689458.dxf',0);
	I.see('Error - Unsupported panel configuration in subarray 1','#error_message_dxf');
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Spacing%20Test&system_type=1&module_type=96%20Cell&building_height=36&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');	
	I.seeProjectInformationPage(1);
	I.uploadDxfFileNewSpacing('DataFile/Aurora_HDT_96_Vertical_6.dxf',1);
  I.seeBallastingMethodPage(0);
  I.click('body > div > form > div.navigation_buttons > a');  //back button  
  I.uploadDxfFile('DataFile/Aurora_HDT_96_Vertical_6.dxf',0);
  I.see('Error - Unsupported panel configuration in subarray 1.','#error_message_dxf');  
});

Scenario('Production seismic anchor bug @T201288', function*(I) { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Seismic%20Anchor%20Test&system_type=1&module_type=96%20Cell&building_height=40&building_width=61&building_length=186&building_parapet_height=1&wind_speed=130&exposure_category=B&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1.4&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFileNewSpacing('DataFile/HDT_96_Church.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(0);
  let total_anchors = yield I.grabTextFrom('body > div > div:nth-child(4) > div > div.array_summary > div:nth-child(4) > span.item_body');
  I.say('Total Anchors is ' + total_anchors);
});

Scenario('Incorrect part output for HST 96 cell systems    @T201290', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=HST%2096%20Rear%20Skirt%20Test&system_type=0&module_type=96%20Cell&building_height=36&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=1&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFileNewSpacing('DataFile/Aurora_HST_96_Open_Angle.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(1);
  I.seeDownloadPage();
  I.downloadBomTextFile();
  I.amInPath('Downloads');
  I.seeFile('hst_96_rear_skirt_test_bom.txt');
  I.seeInThisFile('515929	REAR SKIRT, HELIX ROOF');
});


Scenario('PDF report creation errors    @T201293', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=PDF%20Download%20Test&system_type=0&module_type=P-Series&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Universal&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFile('DataFile/HST_PSeries_950kW.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(1);
  I.seePowerStationConfigurationPage(1);
  I.seeDownloadPage();
  I.downloadPdfFile();
  I.amInPath('Downloads');
  I.seeFile('pdf_download_test_documentation.pdf');  
});

Scenario('DXF file is creating an internal server error    @T201294', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=DXF%20Upload%20Test&system_type=1&module_type=128%20Cell&building_height=35&building_width=200&building_length=200&building_parapet_height=2&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12.0&anchor_type=OMG%20PowerGrip%20Universal&design_spectral_response=1.0&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFileNewSpacing('DataFile/D0089352_test-dxf.1526316837864.dxf',0);
  I.seeElement('#nextButton');
});

Scenario('Old spacing values were still used at some part of the code   @T201295', (I) => { 	
	I.amOnPage('http://sp-helix-staging.herokuapp.com/site_characterization/?project_name=Spacing%20Test&system_type=0&module_type=P-Series&building_height=22&building_width=425&building_length=393&building_parapet_height=5&wind_speed=120&exposure_category=C&exposure_category_transition_distance=0&ballast_block_weight=14.0&max_system_pressure=12&anchor_type=OMG%20PowerGrip%20Plus&design_spectral_response=0.20&importance_factor=1');
  I.seeProjectInformationPage(1);
  I.uploadDxfFileNewSpacing('DataFile/D0089371Proposal-DesignA-HST Pseries.dxf',1);
  I.seeBallastingMethodPage(1);
  I.seeSiteSummaryPage(1);
  I.seeArraySummaryPage(0);
  I.click('#all_overlay');
  I.click('#increase_zoom > i');
});




