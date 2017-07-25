var myEditor = CodeMirror(document.getElementById("editor"), {
  lineNumbers: true,
  value: "function hello(){return 'hello world, from Fire';}\n",
  mode: "javascript",
  theme: "dracula",
  indentUnit: 4,
  allowFileDropTypes: ['html', 'css', 'js', 'json', 'py']
});
myEditor.setSize("100%", "100%");
