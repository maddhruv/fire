var myCodeMirror = CodeMirror(document.body, {
  lineNumbers: true,
  value: "function hello(){return 'hello world, from Fire';}\n",
  mode: "javascript",
  theme: "dracula",
  indentUnit: 4,
  allowFileDropTypes: ['html', 'css', 'js', 'json', 'py']
});
