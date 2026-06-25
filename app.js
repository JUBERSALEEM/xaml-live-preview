require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@0.44.0/min/vs" }
});

require(["vs/editor/editor.main"], function () {

    const editor = monaco.editor.create(document.getElementById("editorBox"), {
        value:
`<StackPanel>
    <Button Content="Click Me" />
    <TextBlock Text="Hello ProGlass UI" />
</StackPanel>`,
        language: "xml",
        theme: "vs-dark"
    });

    function updatePreview() {
        const code = editor.getValue();
        const html = parseXAML(code);
        document.getElementById("previewBox").innerHTML = html;
    }

    editor.onDidChangeModelContent(updatePreview);

    updatePreview();
});
