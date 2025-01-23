var wms_layers = [];
var format_Indo_Kab_Kot_0 = new ol.format.GeoJSON();
var features_Indo_Kab_Kot_0 = format_Indo_Kab_Kot_0.readFeatures(json_Indo_Kab_Kot_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indo_Kab_Kot_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Indo_Kab_Kot_0.addFeatures(features_Indo_Kab_Kot_0);var lyr_Indo_Kab_Kot_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indo_Kab_Kot_0, 
                style: style_Indo_Kab_Kot_0,
                title: '<img src="styles/legend/Indo_Kab_Kot_0.png" /> Indo_Kab_Kot'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });var format_RUMAH_2 = new ol.format.GeoJSON();
var features_RUMAH_2 = format_RUMAH_2.readFeatures(json_RUMAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAH_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RUMAH_2.addFeatures(features_RUMAH_2);var lyr_RUMAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAH_2, 
                style: style_RUMAH_2,
                title: '<img src="styles/legend/RUMAH_2.png" /> RUMAH'
            });var format_tim2kordinat123_3 = new ol.format.GeoJSON();
var features_tim2kordinat123_3 = format_tim2kordinat123_3.readFeatures(json_tim2kordinat123_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tim2kordinat123_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tim2kordinat123_3.addFeatures(features_tim2kordinat123_3);var lyr_tim2kordinat123_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tim2kordinat123_3, 
                style: style_tim2kordinat123_3,
                title: '<img src="styles/legend/tim2kordinat123_3.png" /> tim 2 kordinat 123'
            });

lyr_Indo_Kab_Kot_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_RUMAH_2.setVisible(true);lyr_tim2kordinat123_3.setVisible(true);
var layersList = [lyr_Indo_Kab_Kot_0,lyr_jalan_1,lyr_RUMAH_2,lyr_tim2kordinat123_3];
lyr_Indo_Kab_Kot_0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'NAMA_JLN': 'NAMA_JLN', 'JENIS_JLN': 'JENIS_JLN', });
lyr_RUMAH_2.set('fieldAliases', {'id': 'id', 'RUMAH': 'RUMAH', });
lyr_tim2kordinat123_3.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH (S/Y)': 'SOUTH (S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KET': 'KET', });
lyr_Indo_Kab_Kot_0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'NAMA_JLN': 'TextEdit', 'JENIS_JLN': 'TextEdit', });
lyr_RUMAH_2.set('fieldImages', {'id': 'TextEdit', 'RUMAH': 'TextEdit', });
lyr_tim2kordinat123_3.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH (S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KET': 'TextEdit', });
lyr_Indo_Kab_Kot_0.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'NAMA_JLN': 'no label', 'JENIS_JLN': 'no label', });
lyr_RUMAH_2.set('fieldLabels', {'id': 'no label', 'RUMAH': 'no label', });
lyr_tim2kordinat123_3.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH (S/Y)': 'no label', 'NAMA TEMPAT': 'no label', 'KET': 'no label', });
lyr_tim2kordinat123_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});