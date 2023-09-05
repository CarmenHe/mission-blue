var container = $(`.message`);
var submitSeaAnimalButton = $(`.seaAnimalButton`);

submitSeaAnimalButton.on("click", addMessage);

function addMessage(event) {
  event.preventDefault();
  
  var remove = $(`.remove`);
  remove.remove();

  var enterNameOfSeaAnimal = $(`.nameOfSeaAnimal`).val();
  

  container.append(`<div class="remove"><p><strong>Ocean pollution dramatically harms ${enterNameOfSeaAnimal}.</strong></p></div>`);

  if(enterNameOfSeaAnimal === "corals") {
    container.append(`<div class="remove"><p>Ocean pollution leads to a warming ocean. This is not a suitable enviroment for corals to strive in. As a result, there is an increase in thermal stress on the coral leading to coral bleaching and infectious disases. Learn more <a href="https://oceanservice.noaa.gov/facts/coralreef-climate.html">here</a> about the dangerous effects of rising water tempatures on coral reefs.</p>
<center>
<img src="https://www.aims.gov.au/sites/default/files/ff037440-2181-42a2-a8cf-2e55405674dc.jpg"></center></div>`);
  } else if (enterNameOfSeaAnimal === "dolphins") {
    container.append(`<div class="remove"><p>Ocean pollution has a domino effect on its surrounding ecosystems. When a dolphin consumes a contaminated prey, those toxins enter the dolphin's body. Their bodies are unable to detoxify themselves from the contaminated organisims they just consume. As a result, those toxins are stored in the dolphin's body leaving it vulnerable to diseases. Learn more <a href="https://www.4ocean.com/blogs/blog/how-plastic-ingestion-impacts-dolphins-and-porpoises">here</a> about how toxins can travel through the food chain, thus affecting dolphins.</p>
<center>
<img src="https://www.scimex.org/__data/assets/image/0007/452617/a-family-of-bottlenose-dolphins-4384680_1920.jpg">
</center> </div>`);
  } else if (enterNameOfSeaAnimal === "fish") {
    container.append(`<div class="remove"><p>Accroding to <em>DownToEarth</em> there are 386 marine fish species that are know to have ingested plastic debris. Of the 386, 210 of those species are commercially important. Plastic pollution can cause digestion issues and ultimately killing the fish. Learn more <a href="https://www.downtoearth.org.in/blog/pollution/hundreds-of-fish-species-including-many-that-humans-eat-are-consuming-plastic-75489">here</a> about the dangers of plastic pollution in our oceans.
</p>
<center>
<img src="https://i1.wp.com/hillnotes.ca/wp-content/uploads/2019/12/GhostFishingFeatImage.jpg?fit=4000%2C3000"></center></div>`);
  } else if (enterNameOfSeaAnimal === "lobsters") {
    container.append(`<div class="remove"><p>Microplastic fibers are a big issue for lobsters. Microplastic fibers impact the larval lobsters at each stage of their development cycle. Those same fibers affect the lobster from feeding and respiration. As a result, preventing some from reaching adulthood. Learn more <a href="https://beta.nsf.gov/news/microplastic-pollution-harms-lobster-larvae-study-finds">here</a> about how microplastic pollution harms lobster populations.
</p>
<center>
<img src="https://www.nsf.gov/news/mmg/media/images/lobsters_plastics_f.jpg"></center></div>`);
  } else if (enterNameOfSeaAnimal === "manatees") {
    container.append(`<div class="remove"><p>Manatees are aquatic herbivores. They spend most of their life in shallow water because they feed on sea grass. Algal blooms in sea grass are caused by run-off pollution that enters the ocean. This can lead to toxic algae within the sea grass and when manatees consume this sea grass, it can harm them severly. Learn more <a href="https://www.biologicaldiversity.org/species/mammals/Florida_manatee/#:~:text=Climate%20change%20is%20also%20a,hurricanes%20and%20lethal%20algal%20blooms.">here</a>
</p>
<center>
<img src="https://www.biologicaldiversity.org/assets/img/species/mammals/Manatee_SWhitcraft_USFWS.jpg"></center></div>`);
  } else if (enterNameOfSeaAnimal === "octopuses") {
    container.append(`<div class="remove"><p>Ocean pollution causes the ocean's temperature to increase. A study by <em>Repolho etal</em> has proved that a 3°C increase can impact a developing octopus. It has the possibility of hatching prematurely, decreasing its survivability. Learn more <a href="https://adapt136.ucsc.edu/taxa/invertebrates/the-common-octopus-is-facing-even-more-common-problems-and-it-s-our-fault">here</a> about the threat of climate change towards octopus.
</p>
<center>
<img src="https://as1.ftcdn.net/v2/jpg/02/07/12/70/1000_F_207127092_f2fertPFSTlPSOmzEny8BQGZiD6GOSVt.jpg"></center></div>`);
  } else if (enterNameOfSeaAnimal === "seals") {
    container.append(`<div class="remove"><p>Plastic pollution does put seals in harmful situtations. If they get entangled in  plastic waste, they cannot get out of it by themselves. As they grow, the plastic waste will tighten around whatever part of their body it is attached to. Leaving them with life long injuries that may lead to their death. Learn more <a href="https://www.greenpeace.org/africa/en/blogs/11711/plastic-pollution-is-making-our-seals-suffer/#:~:text=Once%20entangled%20in%20this%20plastic,caused%20by%20negligent%20human%20behaviour.">here</a> to understand the dangers of plastic pollution towards seals.
</p>
<center>
<img src="https://s.yimg.com/ny/api/res/1.2/HI7MghpsdfCCgqjBklvdWg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/uu/api/res/1.2/bVOBGpGo.FP7zpdtwoJAAw--~B/aD0yMzI2O3c9NDEzNDthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/fc749fe90710d395ee3481d4f5391788"></center></div>`);
  } else if (enterNameOfSeaAnimal === "sharks") {
    container.append(`<div class="remove"><p>Up to 100 million sharks die every year due to plastic pollution and destructive fishing practices. Sharks can get entangled in plastic waste and can become severly disabled. They are unable to prey porperly leaving them to strave to death or face life threatening injuries. Learn more <a href="https://shark.swiss/sharks/hunted-hunters/plastics#:~:text=Sea%20animals%20can%20get%20entangled,during%201%20hour%20of%20feeding!">here.</a>
</p>
<center>
<img src="https://d.newsweek.com/en/full/1650386/shark.jpg"></center></div>`);
  } else if (enterNameOfSeaAnimal === "turtles") {
    container.append(`<div class="remove"><p>When turtles consume pollutants, it can lead to build up in their tissues over time. As a result, the turtle will contract diseases due to immunosuppression. When they consume sharp plastics, it can cause interal organ damage and severe blockage. Learn more <a href="https://www.seeturtles.org/ocean-pollution">here</a> about turtles and how ocean pollution affects them.
</p>
<center>
<img src="https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1545091517468-ILOFFQ43A9CTHK6EV7PQ/Ben+Hicks.JPG?format=1500w"></center></div>`);
  } else if (enterNameOfSeaAnimal === "whales") {
    container.append(`<div class="remove"><p>When a whale consumes plastic, it will pile up in their stomach. Preventing them from digesting food and obstructing bowels. As a result, the whale dies from stravation. Learn more <a href="https://www.worldwildlife.org/stories/whales-and-the-plastics-problem#:~:text=Every%20year%2C%20300%2C000%20whales%2C%20dolphins,the%20environment%20in%20the%20meantime.">here</a> about the detrimental effects of plastic pollution on whales.
</p>
<center>
<img src="https://files.worldwildlife.org/wwfcmsprod/images/humpback_breach_Logan_Pallin_/magazine_small/2b0g49qagz_AP_Mar2019_HumpbackBreach_LoganPallin_UCSC.jpg"></center></div>`);
  } else {
    alert ("Please enter a sea animal or marine mammal from the list above. Please make sure you spell the name exactly how you see it in the list.");
  }
}