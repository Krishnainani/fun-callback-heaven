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
  fetchAllOwners((err, ownerArray) => {
    let counter = ownerArray.length;
    const catAndOwners = [];
    for(owner of ownerArray){
      fetchCatsByOwner(owner, (err, cats) => {
        catAndOwners.push(...cats);
        counter --;
        if (counter === 0){
          catAndOwners.sort();
          callbackFunc(null, catAndOwners);
        }
    })
    
  }
  })
}

function fetchOwnersWithCats(callbackFunc) {
  fetchAllOwners((err, ownerArray) => {
    const catAndOwners = [];
    for(let i=0; i< ownerArray.length; i++){
      const catPairs = {};
      catPairs.owner = ownerArray[i];
      fetchCatsByOwner(ownerArray[i], (err, cats) => {
        catPairs.cats = cats;
        catAndOwners.push(catPairs);
        if (catAndOwners.length === ownerArray.length){
          console.log(catAndOwners);
          // catAndOwners.sort();
          callbackFunc(null, catAndOwners);
        }
      
    })
  
  }

  })
}
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
