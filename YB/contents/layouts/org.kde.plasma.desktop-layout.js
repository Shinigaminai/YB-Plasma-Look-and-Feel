var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 17,
                    "geometry.width": 15,
                    "geometry.x": 76,
                    "geometry.y": 34,
                    "plugin": "org.kde.plasma.gtask-web",
                    "title": "Google Task web viewer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "697",
                    "DialogWidth": "980"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1647",
                    "arrangement": "1",
                    "iconSize": "3",
                    "positions": "16,10,desktop:/Unterweisung Haus- und Laborordnung_Nachweis zur Durchführung der Unterweisung MOS.pdf,1,0,desktop:/mozilla.pdf,0,8,desktop:/Checkliste Mathematik Teilnehmende.odt,0,9,desktop:/Studiengebeitrag-Bezahlung-Rueckbeil_Patrick.png,2,2,desktop:/Toaru Majutsu no Index - GerSub - 17.mp4,2,0,desktop:/inf18b-2018-49.pdf,7,0,desktop:/Drifters - EngSub - 1.mp4,14,0,desktop:/Hataraku Saibou - EngSub - 3.mp4,12,2,desktop:/inf18b-2019-01.pdf,7,1,desktop:/Hataraku Saibou - EngSub - 4.mp4,12,3,desktop:/Python Tutorial,6,8,desktop:/Hataraku Saibou - EngSub - 1.mp4,12,0,desktop:/Hataraku Saibou - EngSub - 2.mp4,12,1,desktop:/Oma Kontakte,6,7,desktop:/old-hiragana-chart-sample.jpg,6,4,desktop:/2018-06-27-raspbian-stretch-lite.zip,2,7,desktop:/ISLAND - EngSub - 9.mp4,10,0,desktop:/Kana_chart.png,6,5,desktop:/Nami_Meme.png,2,5,desktop:/Fahrplan_Mosbach_Heilbronn.pdf,0,6,desktop:/kmymoney.pdf,0,7,desktop:/Chu Feng - B.E.E. - EngSub -6.mp4,15,0,desktop:/Command Spicker.txt,0,4,desktop:/latteDock_yb.layout.latte,0,5,desktop:/kvantum_macOS,0,2,desktop:/inf18b-2019-05.pdf,7,2,desktop:/Arc-Dark-Transparent.qtcurve,0,3,desktop:/trash.desktop,0,0,desktop:/Home.desktop,0,1",
                    "previewPlugins": "imagethumbnail,jpegthumbnail,svgthumbnail,ffmpegthumbs",
                    "showToolbox": "false",
                    "sortMode": "-1",
                    "toolTips": "true"
                },
                "/Wallpaper/com.github.zren.inactiveblur/General": {
                    "FillMode": "2",
                    "Image": "file:///home/patrick/OneDrive/Bilder/MacOS wallpapers/macOS-Sierra-Wallpaper-Macbook-Wallpaper.jpg"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "2",
                    "Image": "file:///home/patrick/OneDrive/Bilder/MacOS wallpapers/macOS-Sierra-Wallpaper-Macbook-Wallpaper.jpg"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "FillMode": "2",
                    "Image": "file:///home/patrick/OneDrive/Bilder/MacOS wallpapers/macOS-Sierra-Wallpaper-Macbook-Wallpaper.jpg",
                    "SlideInterval": "490",
                    "SlidePaths": "/home/patrick/.desktop/Hintergrund"
                },
                "/Wallpaper/org.kde.video/General": {
                    "Folder": "file:///home/patrick/Videos/",
                    "Video": "file:///home/patrick/Videos/Cross Ange - Tenshi to Ryuu no Rondo - EngSub - 1.mp4"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "6"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "icon": "file:///usr/share/icons/manjaro/green/48x48.png",
                            "showName": "false",
                            "showSett": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.uswitcher"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "bold": "true",
                            "noWindowType": "text"
                        }
                    },
                    "plugin": "org.communia.apptitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "23"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "history": "#93cee9,#1abc9c"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "currentDesktopSelected": "ShowDesktop"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "sources": "network%2Finterfaces%2Fenp2s0%2Ftransmitter%2Fdata"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.net"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "9"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.systemloadviewer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "84"
                        },
                        "/Configuration/Containments/8": {
                            "formfactor": "2"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Agenda": {
                            "agenda_newevent_last_calendar_id": "stronga987@gmail.com",
                            "agenda_weather_show_icon": "false"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "1007"
                        },
                        "/Configuration/Events": {
                            "enabledCalendarPlugins": "/usr/lib/x86_64-linux-gnu/qt5/plugins/plasmacalendarplugins/holidaysevents.so,/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so"
                        },
                        "/Configuration/General": {
                            "clock_timeformat": "MMM d, HH:mm",
                            "widget_show_meteogram": "false",
                            "widget_show_timer": "false"
                        },
                        "/Configuration/Google%20Calendar": {
                            "access_token": "ya29.Gl2KBnKDbpuroUXKMqnKRPxCpd9SXicvskopca9Ih2Z0o0Op4b4rBYMbuys40uPMQYunelN8WQEifcGMJzSdIOtVvMWMMOU720T1aScy8CKgVuH1l2QDETfK6PIjKgo",
                            "access_token_expires_at": "699685005",
                            "access_token_type": "Bearer",
                            "calendar_id_list": "#contacts@group.v.calendar.google.com,de.german#holiday@group.v.calendar.google.com,jq62mo0vtskrnslr2h6gifp3em6kgua5@import.calendar.google.com,stronga987@gmail.com",
                            "calendar_list": "W3sia2luZCI6ImNhbGVuZGFyI2NhbGVuZGFyTGlzdEVudHJ5IiwiZXRhZyI6IlwiMTQ4NjkyMzE2OTU4NDAwMFwiIiwiaWQiOiJzdHJvbmdhOTg3QGdtYWlsLmNvbSIsInN1bW1hcnkiOiJzdHJvbmdhOTg3QGdtYWlsLmNvbSIsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsImNvbG9ySWQiOiIxNiIsImJhY2tncm91bmRDb2xvciI6IiM0OTg2ZTciLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJvd25lciIsImRlZmF1bHRSZW1pbmRlcnMiOlt7Im1ldGhvZCI6ImVtYWlsIiwibWludXRlcyI6MzB9LHsibWV0aG9kIjoicG9wdXAiLCJtaW51dGVzIjozMH1dLCJub3RpZmljYXRpb25TZXR0aW5ncyI6eyJub3RpZmljYXRpb25zIjpbeyJ0eXBlIjoiZXZlbnRDcmVhdGlvbiIsIm1ldGhvZCI6ImVtYWlsIn0seyJ0eXBlIjoiZXZlbnRDaGFuZ2UiLCJtZXRob2QiOiJlbWFpbCJ9LHsidHlwZSI6ImV2ZW50Q2FuY2VsbGF0aW9uIiwibWV0aG9kIjoiZW1haWwifSx7InR5cGUiOiJldmVudFJlc3BvbnNlIiwibWV0aG9kIjoiZW1haWwifV19LCJwcmltYXJ5Ijp0cnVlLCJjb25mZXJlbmNlUHJvcGVydGllcyI6eyJhbGxvd2VkQ29uZmVyZW5jZVNvbHV0aW9uVHlwZXMiOlsiZXZlbnRIYW5nb3V0Il19fSx7ImtpbmQiOiJjYWxlbmRhciNjYWxlbmRhckxpc3RFbnRyeSIsImV0YWciOiJcIjE1MTYyMDg4MTI4OTUwMDBcIiIsImlkIjoianE2Mm1vMHZ0c2tybnNscjJoNmdpZnAzZW02a2d1YTVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20iLCJzdW1tYXJ5IjoiRmVyaWVuIC0gQmF5ZXJuIiwiZGVzY3JpcHRpb24iOiJIaWVyIGZpbmRlc3QgRHUgYWxsZSBGZXJpZW50ZXJtaW5lIGbDvHIgZGFzIEJ1bmRlc2xhbmQgQmF5ZXJuLlxuXG5TY2h1bGZlcmllbiBpc3QgaW4gZGVyIFJlZ2VsIGVpbiBhbmRhdWVybmRlciBaZWl0cmF1bSB2b24gYmlzIHp1IDYgV29jaGVuLCBpbiB3ZWxjaGVtIGtlaW5lIFNjaHVsZSB1bmQga2VpbiBVbnRlcnJpY2h0IHN0YXR0ZmluZGVuLiBEaWUgVGFrdHVuZyBkZXIgRmVyaWVuIG9ibGllZ3QgZGVuIGpld2VpbGlnZW4gQnVuZGVzbMOkbmRlcm4uIElubmVyaGFsYiBlaW5lcyBKYWhyZXMgZ2lidCBlcyBKYWhyZXN6ZWl0Z2VidW5kZW5lIFNjaHVsZmVyaWVuLCB1LmEuIE9zdGVyZmVyaWVuLCBTb21tZXJmZXJpZW4sIEhlcmJzdGZlcmllbiB1bmQgV2VpaG5hY2h0cy0gb2RlciBXaW50ZXJmZXJpZW4uIERpZSBTb21tZXJmZXJpZW4gdW1mYXNzZW4gZGVuIGzDpG5nc3RlbiBaZWl0cmF1bSB1bmQgZGF1ZXJuIGJpcyB6dSA3IFdvY2hlbi7CoFxuXG5Jbm5lcmhhbGIgZGVzIOKAnkJheWVybmVyIEFia29tbWVuc+KAnCB2b20gMjguIE9rdG9iZXIgMTk2NCwgZWluaWd0ZW4gc2ljaCBkaWUgZWluemVsbmVuIFN0YWF0ZW4gYnp3LiBCdW5kZXNsw6RuZGVyIGRlciBCdW5kZXNyZXB1YmxpayBEZXV0c2NobGFuZCBhdWYgZWluZSBHZXNhbXRmZXJpZW56ZWl0IHZvbiA3NSBXZXJrdGFnZW4gKGRhdm9uIDEyIFNhbXN0YWdlKSBpbSBKYWhyLiBEaWUgQnVuZGVzbMOkbmRlciB0cmVmZmVuIHp1ciBFbnR6ZXJydW5nIGRlcyBWZXJrZWhycyB1bmQgenVyIFN0cnVrdHVyIGRlcyBVcmxhdWJzIEFic3ByYWNoZW4gaGluc2ljaHRsaWNoIGRlciBGZXJpZW56ZWl0ZW4gdW5kIGvDtm5uZW4gZGllIDc1IFRhZ2UgbGVpY2h0IHZhcmlpZXJlbiBvZGVyIGRhdWVyaGFmdCBmZXN0IGludGVncmllcmVuLiBBdWYgZWluaWdlbiBkZXV0c2NoZW4gSW5zZWxuIGdlbHRlbiBTb25kZXJyZWdlbHVuZ2VuLiIsInRpbWVab25lIjoiRXVyb3BlL0JlcmxpbiIsImNvbG9ySWQiOiIyMiIsImJhY2tncm91bmRDb2xvciI6IiNmNjkxYjIiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX0seyJraW5kIjoiY2FsZW5kYXIjY2FsZW5kYXJMaXN0RW50cnkiLCJldGFnIjoiXCIxNTE2MjA4ODEwODQxMDAwXCIiLCJpZCI6IiNjb250YWN0c0Bncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20iLCJzdW1tYXJ5IjoiQ29udGFjdHMiLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJjb2xvcklkIjoiMyIsImJhY2tncm91bmRDb2xvciI6IiNmODNhMjIiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX0seyJraW5kIjoiY2FsZW5kYXIjY2FsZW5kYXJMaXN0RW50cnkiLCJldGFnIjoiXCIxNTE2OTA4NzQ2MzE1MDAwXCIiLCJpZCI6ImRlLmdlcm1hbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbSIsInN1bW1hcnkiOiJGZWllcnRhZ2UgaW4gRGV1dHNjaGxhbmQiLCJ0aW1lWm9uZSI6IkV1cm9wZS9CZXJsaW4iLCJzdW1tYXJ5T3ZlcnJpZGUiOiJGZWllcnRhZ2UgaW4gRGV1dHNjaGxhbmQiLCJjb2xvcklkIjoiOSIsImJhY2tncm91bmRDb2xvciI6IiM3YmQxNDgiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX1d",
                            "refresh_token": "1/73UhTcUBh6Mld5TYz2E589mAtyt7O5t2AGPV6kLy92kA9sKgKld6OxBS5Yi2uBme"
                        }
                    },
                    "plugin": "org.kde.plasma.eventcalendar"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.milou"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1680"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 93.33333333333333,
            "minimumLength": 93.33333333333333,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
