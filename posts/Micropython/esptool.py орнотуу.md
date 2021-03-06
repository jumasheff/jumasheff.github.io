# esptool.py орнотуу

*esptool.py* Python тилинде жазылган, андыктан бул тил компьютерде орнотулган болуш керек.

## Сизде Python орнотулганбы?

Орнотулгандыгын текшериш үчүн *терминалдан* кийинкини териңиз:


```bash
python --version
```

Эгерде сизде `Python 2.7.12` же `Python 3.5.1` сыяктуу версиясын көрсөткөн жазуулар чыкса, анда компьютериңизде Python орнотулган. Жок болсо, анда муну теребиз:


```bash
sudo apt-get install python
```

## pip орнотулганбы?

*pip* атуу программа Python тилинде жазылган программаларды компьютерибизге оңой орнотконго жардам берет.

```bash
pip --version
```


деп терминалдан буйрук берип, *pip'тин* версиясын билип алабыз:


```bash
pip 9.0.1 from /home/murat/.local/lib/python2.7/site-packages (python 2.7)
```


Орнотулбаган болсо, анда кийинки сыяктуу жазуу чыгат:


```bash
The program 'pip' is currently not installed. To run 'pip' please ask your administrator to install the package 'python-pip'
```


Бул программа бизге керек, андыктан аны орнотобуз (албетте, сизде жок болсо):


```bash
sudo apt-get install python-pip
```


## Эми esptool.py'ды орнотконго даяр болдук


```bash
sudo pip install esptool
```


Эми `esptool.py`ду колдоно берсек болот. Мисалы, жеткиликтүү параметрлеринин тизмегин алыш үчүн кийинкини териңиз: `esptool.py -h`
