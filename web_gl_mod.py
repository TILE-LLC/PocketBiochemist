# Simple python script to modify the index.html file in the WebGL build
# to allow for custom unity_save.js file to be loaded.

with open('index.html', 'r') as file:
    lines = file.read().split('\n')
    with open('index.html', 'w') as file:
        for line in lines:
            file.write(line + '\n')
            if '(unityInstance) =>' in line:
                file.write('\t\t\t\t\twindow.unityInstance = unityInstance;\n')
            elif '</script>' in line:
                file.write('\t\t<script src="unity_save.js"></script>\n')
