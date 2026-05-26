import os
import sys

# THẦN CHÚ Ở ĐÂY: Ép thẳng vào nhân WebKit của Ubuntu để tắt bảo mật CORS với file local
os.environ['WEBKIT_DISABLE_WEB_SECURITY_FOR_LOCAL_FILES'] = '1'

import webview
import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk, Gdk

def bien_thanh_hinh_nen(window):
    gtk_window = None
    
    # --- CHIẾN THUẬT TỰ ĐỘNG DÒ CỬA SỔ ---
    if hasattr(window, 'native'):
        gtk_window = window.native
    elif hasattr(window, 'gui') and hasattr(window.gui, 'window'):
        gtk_window = window.gui.window
    else:
        windows = Gtk.Window.list_toplevels()
        if windows:
            gtk_window = windows[0]
            
    if not gtk_window:
        print("--- DEBUG PYWEBVIEW ---")
        return

    # --- ĐOẠN CODE GHIM NỀN ---
    gtk_window.set_decorated(False)
    gtk_window.set_skip_taskbar_hint(True)
    gtk_window.set_skip_pager_hint(True)
    gtk_window.set_keep_below(True)
    gtk_window.set_type_hint(Gdk.WindowTypeHint.DESKTOP)
    
    # Tăng kích thước cửa sổ cho vừa 6 cột nút vuông
    gtk_window.resize(960, 600)
    gtk_window.move(50, 50)
    
    gtk_window.show_all()

if __name__ == '__main__':
    window = webview.create_window(
        'MyHtmlWidget', 
        'file:///home/enix/WEB/Main/main.html', 
        transparent=True,
        frameless=True,
        on_top=False
    )
    
    # Hàm start viết siêu tối giản, không thêm tham số lạ để tránh lỗi phiên bản cũ
    webview.start(bien_thanh_hinh_nen, window, private_mode=False)