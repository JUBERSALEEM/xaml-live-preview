function parseXAML(xaml) {

    let html = xaml;

    // Button
    html = html.replace(/<Button Content="(.*?)" \/>/g,
        '<button>$1</button>');

    // TextBlock
    html = html.replace(/<TextBlock Text="(.*?)" \/>/g,
        '<p>$1</p>');

    // StackPanel (simple div)
    html = html.replace(/<StackPanel>/g, '<div style="display:flex;flex-direction:column;">');
    html = html.replace(/<\/StackPanel>/g, '</div>');

    // Grid (basic)
    html = html.replace(/<Grid>/g, '<div style="display:grid;gap:10px;">');
    html = html.replace(/<\/Grid>/g, '</div>');

    return html;
}
