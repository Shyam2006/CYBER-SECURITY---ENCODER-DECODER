import wx
import base64

# Cipher Functions
def caesar_encode(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
        else:
            result += char
    return result

def caesar_decode(text, shift):
    return caesar_encode(text, -shift)

def rot_13(text):
    return caesar_encode(text, 13)


def vigenere_encode(text, key):
    result = ""
    key = (key * (len(text) // len(key) + 1)).upper()
    j = 0
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            k_char = key[j % len(key)]
            shift = ord(k_char.upper()) - 65
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
            j += 1
        else:
            result += char
    return result


def vigenere_decode(text, key):
    result = ""
    key = (key * (len(text) // len(key) + 1)).upper()
    j = 0
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            k_char = key[j % len(key)]
            shift = ord(k_char.upper()) - 65
            result += chr((ord(char) - ascii_offset - shift) % 26 + ascii_offset)
            j += 1
        else:
            result += char
    return result

def base64_encode(text):
    return base64.b64encode(text.encode()).decode()

def base64_decode(text):
    return base64.b64decode(text.encode()).decode()


# Creating GUI
app = wx.App(False)
frame = wx.Frame(None, title="Encoder/Decoder", size=(500, 400))

panel = wx.Panel(frame)
vbox = wx.BoxSizer(wx.VERTICAL)

# Creating the Cipher choice dropdown panel
choice = wx.Choice(panel, choices=["Caesar Cipher", "ROT-13", "Vigenère Cipher", "Base64"])
vbox.Add(wx.StaticText(panel, label="Choose Cipher:"), 0, wx.ALL, 5)
vbox.Add(choice, 0, wx.EXPAND | wx.ALL, 5)

# Creating Encode/Decode radiobox
action_box = wx.RadioBox(panel, label="Action", choices=["Encode", "Decode"])
vbox.Add(action_box, 0, wx.EXPAND | wx.ALL, 5)

# Creating Input text option
text_ctrl = wx.TextCtrl(panel)
vbox.Add(wx.StaticText(panel, label="Enter Text:"), 0, wx.ALL, 5)
vbox.Add(text_ctrl, 0, wx.EXPAND | wx.ALL, 5)

# Parameter
param_ctrl = wx.TextCtrl(panel)
vbox.Add(wx.StaticText(panel, label="Parameter (Shift/Key):"), 0, wx.ALL, 5)
vbox.Add(param_ctrl, 0, wx.EXPAND | wx.ALL, 5)

# Output
output_ctrl = wx.TextCtrl(panel, style=wx.TE_MULTILINE | wx.TE_READONLY)
vbox.Add(wx.StaticText(panel, label="Result:"), 0, wx.ALL, 5)
vbox.Add(output_ctrl, 1, wx.EXPAND | wx.ALL, 5)

# Run button and handler
def on_run(event):
    cipher = choice.GetStringSelection()
    action = action_box.GetStringSelection().lower()
    text = text_ctrl.GetValue()
    param = param_ctrl.GetValue()
    
    try:
        if cipher == "Caesar Cipher":
            shift = int(param) if param else 3
            result = caesar_encode(text, shift) if action == "encode" else caesar_decode(text, shift)
        elif cipher == "ROT-13":
            result = rot_13(text)
        elif cipher == "Vigenère Cipher":
            result = vigenere_encode(text, param) if action == "encode" else vigenere_decode(text, param)
        elif cipher == "Base64":
            result = base64_encode(text) if action == "encode" else base64_decode(text)
        else:
            result = "Invalid choice!"
    except Exception as e:
        result = f"Error: {e}"
    
    output_ctrl.SetValue(result)

btn = wx.Button(panel, label="Run")
btn.Bind(wx.EVT_BUTTON, on_run)
vbox.Add(btn, 0, wx.ALIGN_CENTER | wx.ALL, 10)

panel.SetSizer(vbox)
frame.Show()
app.MainLoop()
