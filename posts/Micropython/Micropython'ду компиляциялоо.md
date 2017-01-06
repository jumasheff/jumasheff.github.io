# Micropython жаздыруу

## Git орнотулганбы?
Азыр биз `git` атуу программаны колдонуп, `micropython` тилин `Github` репозиторийинен көчүрүп алабыз.

Биринчи `git` орнотулгандыгын текшеребиз (версиясын сурайбыз):
```bash
git --version
```

Менде `git` орнотулгандыктан, мындай маалымат чыкты:
```bash
git version 2.7.4
```

`git` орнотулбаган болсо, анда могундай сыяктуу маалымат чыгат:
```bash
git: command not found
```

Аны орнотуш үчүн кийинкини териңиз:
```bash
sudo apt-get install git
```

## Долбоорлор папкасы
Долбоорлорубузду сактаганга атайын папка түзөбүз:
```bash
mkdir ~/projects
```


## ESP-SDK керек
NodeMCU/esp8266 үчүн "тепчитме" компиляциялаш үчүн, SDK (source development kit) керек.
Анын рекурсивдик түрдө көчүрүп алабыз:
```bash
cd ~/projects && git clone --recursive https://github.com/pfalcon/esp-open-sdk.git
```

Эми `esp-open-sdk`нин жардамы менен `micropython`ду компиляция кылууга керектүү программаларды орнотобуз:
```bash
sudo apt-get install make unrar-free autoconf automake libtool gcc g++ gperf \
    flex bison texinfo gawk ncurses-dev libexpat-dev python-dev python python-serial \
    sed git unzip bash help2man wget bzip2
```

Соңку Debian/Ubuntu кийинкини талап кылышы мүмкүн:
```bash
sudo apt-get install libtool-bin
```

Компиляция кылуунун алдында
1) Папканын ичине киребиз
2) Мурунку орнотулган программалардын артифакттарын (калдыктарын) тазалайбыз
3) Камтылган репозиторийлерди синхрондоштурабыз
4) Камтылган репозиторийлерди жаңыртабыз
```bash
cd ~/projects/esp-open-sdk
make clean
git submodule sync
git submodule update --init
```

Эми ошол эле папканын ичинде туруп, `esp-open-sdk`ны компиляция кылабыз:
```bash
make
```
Бул процесс 35 мүнөттөн ашык убакыт талап кылат.

`esp-open-sdk`ны эми `~/.bashrc` файлынын ичинде `PATH`ка кошушубуз керек. `nano` менен `~/.bashrc` файлын ачабыз:
```bash
nano ~/.bashrc
```
Ушул файлдын эң түбүнө кийинкини жазабыз:
```bash
export PATH=$PATH:/home/murat/projects/esp-open-sdk/xtensa-lx106-elf/bin
```

Эми файлды сактап, жаап коёбуз, ал үчүн `ctrl+x` басып, `y` тамгасын басабыз.

Эми `~/.basrhc` файлына киргизилген өзгөрүүлөр ишке кириш үчүн кийинкини теребиз:
```bash
source ~/.bashrc
```

## Micropython'ду түшүрүп алабыз
`projects` папкасына кирип, `micropython`ду түшүрөбүз:
```bash
cd ~/projects && git clone --recurse-submodules https://github.com/micropython/micropython.git
```

Азыр `micropython` тили `~/projects/micropython` ичинде жатат. Биз бул тилди `NodeMCU`га орноткону жатабыз. Эсиңизде болсо, ал`esp8266` системасына негизделген, андыктан, 
`~/projects/micropython` ичиндеги `esp8266` папкасына кирип, MicroPython пре-компиляторун компиляция кылышыбыз керек:
```bash
cd ~/projects/micropython
make -C mpy-cross
```

Эми `esp8266` папкасына кирип, `Micropython` бинардык файлын компиляциялайбыз:
```bash
cd ~/projects/micropython/esp8266
make axtls
make
```

```bash
esptool.py --port /dev/ttyUSB0 --baud 9600 write_flash --flash_mode qio --flash_size 32m --flash_freq 40m 0x00000 firmware-combined.bin
```

