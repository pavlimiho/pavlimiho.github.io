dgInitOpeners();
            
function dgInitOpeners() {
    dgLoadTalents();
    document.getElementById('openers-container').style.display = 'none';
}

function dgLoadTalents() {
    var talentsContainer = document.getElementById('talents-for-opener');
    var html = `<div style="margin-top: 20px; margin-bottom: 20px;"><input type="checkbox" onchange="dgChooseTalent()" id="4pc" /> T29 4PC <input type="checkbox" style="margin-left: 20px;" onchange="dgChooseTalent()" id="natures_balance" /> <img src="https://wow.zamimg.com/images/wow/icons/large/ability_druid_balanceofpower.jpg" alt="Nature's Balance" title="Nature's Balance" style="width: 30px;" /> <input type="checkbox" style="margin-left: 20px;" onchange="dgChooseTalent()" id="rattle" /> <img src="https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane01.jpg" alt="Rattle the Stars" title="Rattle the Stars" style="width: 30px;" /> <input type="checkbox" style="margin-left: 20px;" onchange="dgChooseTalent()" id="boat" /> <img src="https://wow.zamimg.com/images/wow/icons/large/ability_druid_earthandsky.jpg" alt="Balance of All Things" title="Balance of All Things" style="width: 30px;" /> <input type="checkbox" style="margin-left: 20px;" onchange="dgChooseTalent()" id="firmament" /> <img src="https://wow.zamimg.com/images/wow/icons/large/spell_druid_equinox.jpg" alt="Sundered Firmament" title="Sundered Firmament" style="width: 30px;" />            <input type="checkbox" style="margin-left: 20px;" onchange="dgChooseTalent()" id="ac" /> <img src="https://wow.zamimg.com/images/wow/icons/large/talentspec_druid_balance.jpg" alt="Astral Communion" title="Astral Communion" style="width: 30px;" /></div>`;
    talentsContainer.innerHTML = html;
}

function dgChooseTalent() {
    var has4pc = document.getElementById('4pc').checked ? 1 : 2;
    var hasNb = document.getElementById('natures_balance').checked ? 2 : 3;
    var hasRattle = document.getElementById('rattle').checked ? 2 : 3;
    var hasBoat = document.getElementById('boat').checked ? 2 : 3;
    var hasFirmament = document.getElementById('firmament').checked ? 2 : 3;
    var hasAc = document.getElementById('ac').checked ? 2 : 3;

    var text = document.querySelectorAll('#openers-container > details:nth-child('+has4pc+') > details:nth-child('+hasNb+') > details:nth-child('+hasRattle+') > details:nth-child('+hasBoat+') > details:nth-child('+hasFirmament+') > details:nth-child('+hasAc+')')[0].childNodes[2].textContent;

    document.getElementById('opener-text').innerHTML = text;
}
