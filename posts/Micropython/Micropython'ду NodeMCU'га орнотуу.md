# Micropython'ду NodeMCU'га жаздыруу

## esptool.py керек
NodeMCU'га micropython орнотуш үчүн, компьютерибизге  *esptool.py* аттуу программаны орнотушубуз керек. Ал тууралуу [бул](/posts/micropython/esptool-py-ornotuu) жерден окусаңыз болот.

## Сериялык портубуз даяр болушу керек
Сериялык портко жетки болуш керек. Ал тууралуу [бул](/posts/micropython/com-porttu-ishke-dayiyndoo) жерден окусаңыз болот.

## picocom керек
`picocom` жок болсо, орнотуп алабыз:

```bash
sudo apt-get install picocom
```

## Компиляциялаган micropython керек 
Micropython'ду [мында](/posts/micropython/micropython-du-kompilyaciyaloo) орнотуп, компиляция кылганбыз. Ошонун ичиндеги `esp8266` анын ичиндеги `build` деген папкасына өтөбүз. Кийинки кадамдарда ал жердеги `firmware-combined.bin` деген файл керек болот.

## Nodemcu'нун мээсин тазалашыбыз керек
Nodemcu'ну компьютердин USB'сине туташтырып, анын ичиндегилерин (жаздырылган абалкы программалык жабдыгын) жок кылабыз:

```bash
esptool.py -p /dev/ttyUSB0 erase_flash
```

## Nodemcu'га micropython'ду жаздырабыз
Эми `firmware-combined.bin` файлын Nodemcu'га жаздырабыз:

```bash
esptool.py --port /dev/ttyUSB0 --baud 460800 write_flash --flash_size=detect 0 firmware-combined.bin
```

Жаздыруу учурунда кийинки сыяктуу жазуулар чыгат:

```bash
Connecting...
Running Cesanta flasher stub...
Flash params set to 0x0240
Writing 532480 @ 0x0... 43008 (8 %)
...
Writing 532480 @ 0x0... 316416 (59 %)
...
Writing 532480 @ 0x0... 532480 (100 %)
Wrote 532480 bytes at 0x0 in 46.0 seconds (92.6 kbit/s)...
Leaving...
```

## Туташабыз
Эми микроконтроллерибизге туташып көрөбүз: 

```bash
picocom /dev/ttyUSB0 --baud=115200
```

Эгерде төмөнкү сыяктуу жазуулар чыкпаса...

```bash
port is        : /dev/ttyUSB0
flowcontrol    : none
baudrate is    : 115200
parity is      : none
databits are   : 8
escape is      : C-a
local echo is  : no
noinit is      : no
noreset is     : no
nolock is      : no
send_cmd is    : sz -vv
receive_cmd is : rz -vv
imap is        : 
omap is        : 
emap is        : crcrlf,delbs,
Terminal ready
```

...анда Nodemcu'дагы RST (reset) басмагын басып коюңуз жана Enter'ди бир жолу басыңыз.

## Текшеребиз

```python
import esp
esp.check_fw()
```

деп жазганда, кийинки сыяктуу жазуулар чыгып, эң негизгиси -- төмөн жаганда `True` чыгышы керек.

```bash
size: 571100
md5: e2a92082e4a1bbe3781efaa4a67a6fc7
True
```

## Салтты бузбай кийинкини жазабыз:

```python
print('Hello, World!')
```

Ошо...