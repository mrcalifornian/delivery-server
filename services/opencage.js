const opencage = require('opencage-api-client');

module.exports = (latt, long, lang, cb) => {
    opencage
        .geocode({ q: `${latt}, ${long}`, language: lang, limit: 1 })
        .then((data) => {
            if (data.results.length > 0) {
                const place = data.results[0];
                cb(place.formatted);
            } else {
                console.log('status', data.status.message);
                console.log('total_results', data.total_results);
            }
        })
        .catch((error) => {
            console.log('error', error.message);
            if (error.status === 402) {
                console.log('hit free trial daily limit');
                console.log('become a customer: https://opencagedata.com/pricing');
            }
        });
}
