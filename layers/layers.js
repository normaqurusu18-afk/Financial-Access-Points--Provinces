var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelenGizomselen_gizo_1 = new ol.format.GeoJSON();
var features_MSelenGizomselen_gizo_1 = format_MSelenGizomselen_gizo_1.readFeatures(json_MSelenGizomselen_gizo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizomselen_gizo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizomselen_gizo_1.addFeatures(features_MSelenGizomselen_gizo_1);
var lyr_MSelenGizomselen_gizo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizomselen_gizo_1, 
                style: style_MSelenGizomselen_gizo_1,
                popuplayertitle: 'M- Selen Gizo — mselen_gizo',
                interactive: true,
                title: '<img src="styles/legend/MSelenGizomselen_gizo_1.png" /> M- Selen Gizo — mselen_gizo'
            });
var format_BredBankHoniarabredbank_honiara_2 = new ol.format.GeoJSON();
var features_BredBankHoniarabredbank_honiara_2 = format_BredBankHoniarabredbank_honiara_2.readFeatures(json_BredBankHoniarabredbank_honiara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniarabredbank_honiara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniarabredbank_honiara_2.addFeatures(features_BredBankHoniarabredbank_honiara_2);
var lyr_BredBankHoniarabredbank_honiara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniarabredbank_honiara_2, 
                style: style_BredBankHoniarabredbank_honiara_2,
                popuplayertitle: 'BredBank Honiara — bredbank_honiara',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniarabredbank_honiara_2.png" /> BredBank Honiara — bredbank_honiara'
            });
var format_MSelenCentralBigNgellabig_ngella__3 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__3 = format_MSelenCentralBigNgellabig_ngella__3.readFeatures(json_MSelenCentralBigNgellabig_ngella__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__3.addFeatures(features_MSelenCentralBigNgellabig_ngella__3);
var lyr_MSelenCentralBigNgellabig_ngella__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__3, 
                style: style_MSelenCentralBigNgellabig_ngella__3,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__3.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_MSelenGizomselen_gizo_1.setVisible(true);lyr_BredBankHoniarabredbank_honiara_2.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_MSelenGizomselen_gizo_1,lyr_BredBankHoniarabredbank_honiara_2,lyr_MSelenCentralBigNgellabig_ngella__3];
lyr_MSelenGizomselen_gizo_1.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizomselen_gizo_1.set('fieldImages', {'fid': '', 'Agent Type': '', 'Agent Business Name': '', 'Physical Address': '', 'Latitude': '', 'Longitude': '', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldImages', {'fid': '', 'PROVINCES': '', 'Bred    BRANCHES': '', 'Type of Branche': '', 'STREET ADDRESS & CITY': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenGizomselen_gizo_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});