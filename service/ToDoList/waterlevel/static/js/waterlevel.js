document.addEventListener('DOMContentLoaded', function() {
    var mapContainer = document.getElementById('map');
    var infoContainer = document.getElementById('waterlevel-info');

    const apiKey = 'AIzaSyD2WVmbg5rwpXUBfhH3CYLWQv8STSAKAW0';
    const mapScript = document.createElement('script');
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    mapScript.async = true;
    document.head.appendChild(mapScript);

    var observatories = [
        {name: '담양군(광주댐)', 'lat': 35.1893218064162, 'lng': 126.98387745098, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(용산교)', 'lat': 35.2405799574413, 'lng': 126.888496612547, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(첨단대교)', 'lat': 35.2175, 'lng': 126.856944, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(유촌교)', 'lat': 35.167116, 'lng': 126.856710, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(풍영정천2교)', 'lat': 35.171876, 'lng': 126.813981, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(어등대교)', 'lat': 35.16, 'lng': 126.82305555555556, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(신운교)', 'lat': 35.16861111111111, 'lng': 126.89083333333333, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(우제교)', 'lat': 35.13138888888889, 'lng': 126.94250000000001, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(설월교)', 'lat': 35.129444444444445, 'lng': 126.92750000000001, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(장록교)', 'lat': 35.134166666666665, 'lng': 126.785, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(평림교)', 'lat': 35.165277777777774, 'lng': 126.69, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(천교)', 'lat': 35.151111111111106, 'lng': 126.90722222222223, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(용진교)', 'lat': 35.21527777777778, 'lng': 126.74666666666667, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(승용교)', 'lat': 35.071111111111115, 'lng': 126.77222222222223, wl: '0.00' ,fl : '0'},
        {name: '광주광역시(극락교)', 'lat': 35.13583333333333, 'lng': 126.82583333333334, wl: '0.00' ,fl : '0'},
    ];

    observatories.forEach(function(obs) {
        var listItem = document.createElement('div');
        listItem.className = 'info-item';
        listItem.setAttribute('data-name', obs.name);
        listItem.innerHTML = `<b>${obs.name}</b><br>현재 수위: ${obs.wl}m<br>홍수확률: ${obs.fl}%`;
        infoContainer.appendChild(listItem);
    });
    
    window.initMap = function() {
        var map = new google.maps.Map(mapContainer, {
            zoom: 13,
            center: { lat: 35.1595, lng: 126.8526 },
            gestureHandling: 'greedy'
        });

        observatories.forEach(function(obs) {
            var marker = new google.maps.Marker({
                position: { lat: obs.lat, lng: obs.lng },
                map: map,
                title: obs.name
            });

            marker.addListener('click', function() {
                var items = document.querySelectorAll('.info-item');
                items.forEach(function(item) {
                    item.classList.remove('highlight');
                    if (item.getAttribute('data-name') === obs.name) {
                        item.classList.add('highlight');
                    }
                });
                alert(`${obs.name}\n현재 수위: ${obs.wl}m`);
            });
        });
    };

    function fetchWaterLevelData() {
        $.ajax({
            url: "/waterlevel/data/",
            method: "GET",
            success: function(data) {
                data.forEach(function(station) {
                    var wl = station.wl.toString();
                    if (wl.startsWith('.')) {
                        wl = '0' + wl;
                    }
                    
                    var item = document.querySelector(`.info-item[data-name="${station.obsnm}"]`);
                    if (item) {
                        item.innerHTML = `<b>${station.obsnm}</b><br>현재 수위: ${wl}m<br>홍수확률: ${station.홍수확률}%`;
                    }
                });
            }
        });
    }

    fetchWaterLevelData();
    setInterval(fetchWaterLevelData, 60000);
});
