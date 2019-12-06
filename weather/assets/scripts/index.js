let city;
let listCity = document.getElementById('list-city');
let listItem;
let buttonFind = document.getElementById('find-button');



(function(){
  var snow = document.getElementById('snow'),
      body = document.body,
      startX = -100,
      startY = -100,
      w = document.documentElement.offsetWidth,
      h = document.documentElement.offsetHeight;

	body.addEventListener('mousemove', function(evt){
    var posX = Math.round(evt.clientX / w * startX)
    var posY = Math.round(evt.clientY / h * startY)
    snow.style.backgroundPosition = posX + 'px ' + posY + 'px'
  })
})()

buttonFind.onclick = function()
{
  city = document.getElementById('city').value;
  
  (async() => {
    if (listCity.childNodes.length != 0)
    {
      while (listCity.firstChild) {
        listCity.removeChild(listCity.firstChild);
    }
    }
    let response = await fetch(`http://api.weatherstack.com/current?access_key=0a7acb4293d4dd987786c0e411f21768&query=${city}`);
    let commits = await response.json();
    listItem  = document.createElement('li');
    
    listCity.appendChild(listItem);
    listCity.appendChild(listItem.cloneNode(false));

    listItem = document.getElementsByTagName('li');
    listItem[listItem.length - 2].appendChild(document.createTextNode(city));
    listItem[listItem.length -1].appendChild(document.createTextNode(commits.current.temperature + ' °C'));

  })();
  return false;
};
