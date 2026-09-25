---
layout: post
title:  "ASCII сандарынын генератору"
date:   2026-09-25 18:00:00 +0600
categories: Python Pyodide ASCII dataset
author: murat
toc: false
comments: false
---

ASCII-арт стилиндеги сандардан (0–9) турган, белгиленген (labelled) train / validation / test берилиштер топтомдорун (dataset) генерациялоочу жаңы курал жасадым:
**[ASCII Digit Generator](https://jumasheff.github.io/ascii-digits/)**.

```text
      ##______         ______
        ``77^         |___  /
         _#              / /
        #^              / /
    ^#####>           ./ /
     _#               \_/
    ##
   ##
   7^
```

- **51 стиль:** кол жазма (cursive), комикс жана display шрифттери, ошондой эле FIGlet ASCII шрифттери.
- **Жөндөөлөр:** тордун (grid) өлчөмү, стилдер, маалыматтарды топтомдорго бөлүү ыкмасы (held-out же random) жана сүрөттү "бузуулар" (damage): ызы-чуу кошуу (noise), буруу (rotation) жана жылдыруу (shift).
- **Сервердин кереги жок:** бардыгы түздөн-түз браузериңизде иштейт. Python коду [Pyodide](https://pyodide.org) аркылуу WebAssembly'де аткарылат.
- **Кайталанма (Reproducible):** бирдей seed жана жөндөөлөр каалаган браузерде дайыма бирдей берилиштерди генерациялайт. Жөндөөлөр шилтеменин өзүндө сакталат, андыктан аны башкалар менен оңой эле бөлүшө аласыз.
- **Жүктөп алуу:** ичинде `train.jsonl`, `val.jsonl`, `test.jsonl`, `metadata.json` жана `README.txt` файлдары бар zip-архив.

Ошондой эле, бул куралдын командалык саптан (CLI) иштөөчү версиясы да бар. Ал дал ушул эле Python-пакеттин негизинде иштейт:
[github.com/jumasheff/ascii-digits](https://github.com/jumasheff/ascii-digits).
