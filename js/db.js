function shuffle(o){return o.sort((()=>Math.random()-.5))}const BOT_URL="https://api.telegram.org/bot1743289912:AAHH1JyL1PVZiCfsfy645Ea6B_6i0KVHqWI/sendMessage?chat_id=-508401413&text=",LESSON_URL="https://vitispro.getcourse.ru/pl/teach/control/lesson/view?id=202127873&editMode=0",ANSWERS=3;let userEmail,userSortOne0=0,userSortTwo0=0,userSortOne1=0,userSortTwo1=0,userSortY=0,contentList=["Шенен Блан","Пинотаж","Последовательность"],contentSortOne0=['<div class="one__category oneBorder" style="background-image: url(\'img/apple.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/chamomile.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/honey.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/pear.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/quince.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/banana.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/bell-pepper.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/avocado.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/cherry.svg\')" onclick="sortOneChoose(this, 0)"></div>'],contentSortOne1=['<div class="one__category oneBorder" style="background-image: url(\'img/cherry.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/blackberry.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/fig.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/meat.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/mint.svg\')" onclick="sortOneChoose(this, 1)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/avocado.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/honey.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/banana.svg\')" onclick="sortOneChoose(this, 0)"></div>','<div class="one__category oneBorder" style="background-image: url(\'img/bell-pepper.svg\')" onclick="sortOneChoose(this, 0)"></div>'],contentSortY=["UNIT","REGION","DISTRICT","WARD","ESTATE"],contentAsked=["Почему ЮАР с иронией относит себя к определению Новый Свет?","Когда вина ЮАР стали завоёвывать мир?","Что такое ABSA top-10 Pinotage Competition?","Что такое WO и в чём её суть?","Что указано на этикетке вин ЮАР со статусом WO?"];
