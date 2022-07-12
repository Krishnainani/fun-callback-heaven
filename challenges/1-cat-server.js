const request = require('../utils/server');

function checkServerStatus(callbackFunc) {
  request('/status', (err, data) => {
    callbackFunc(null, data);
  });
}

function fetchBannerContent(callbackFunc) {
  request('/banner', (err, banner) => {
    const updatedBanner = { ...banner };
    updatedBanner.copyrightYear = 2022;
    callbackFunc(null, updatedBanner);
  });
}

function fetchAllOwners(callbackFunc) {
  request('/owners', (err, array) => {
    const newOwners = array.map(owner => owner.toLowerCase());
    callbackFunc(null, newOwners);
  });
}

function fetchCatsByOwner(name, callbackFunc) {
  request(`/owners/${name}/cats`, (err, array) => {
    if (err) {
      callbackFunc(err);
    } else {
      callbackFunc(null, array);
    }
  });
}

function fetchCatPics(array, callbackFunc) {
  const catpics = [];

  if (array.length === 0) {
    callbackFunc(null);
  }

  for (catName of array) {
    request(`/pics/${catName}`, (err, catpic) => {
      if (err) {
        catpics.push('placeholder.jpg');
      } else {
        catpics.push(catpic);
      }
      if (catpics.length === array.length) {
        callbackFunc(null, catpics);
      }
    });
  }
}

function fetchAllCats(callbackFunc) {
  fetchAllOwners((err, ownerArray) => {});
}

function fetchOwnersWithCats() {}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
