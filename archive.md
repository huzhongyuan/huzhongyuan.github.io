---
layout: page
title: "Archive"
description: "你看到的，是我心系已久的情怀"
header-img: "img/orange.jpg"
---

<center>
    <p><img src="http://7xlfkx.com1.z0.glb.clouddn.com/white2.jpg" align="center"></p>
</center>
<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
