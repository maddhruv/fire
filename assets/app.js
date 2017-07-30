var myEditor = CodeMirror(document.getElementById("editor"), {
  lineNumbers: true,
  value: "function hello(){return 'hello world, from Fire';}\n",
  mode: "javascript",
  theme: "dracula",
  indentUnit: 4,
  allowFileDropTypes: ['html', 'css', 'js', 'json', 'py']
});
myEditor.setSize("100%", "100%");

//time & date
function setTime(ts) {
  var date = new Date(ts);
  $('.time').text(date.toLocaleString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  })).attr('datetime', date.getHours() + ':' + date.getMinutes());
  $('.date').text(date.toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })).attr('datetime', date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
  setTimeout(function() {
    setTime(Date.now());
  }, 1000);
}
setTime(Date.now());
