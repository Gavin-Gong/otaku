<template>
  <li :style="bg">
    <div class="inner-card">
      <div class="slide">
        <p>{{data.desc}}</p>
        <p>{{data.created_at}}</p>
      </div>
      <div class="footer-bar">
        <h4>{{data.title}}</h4>
        <ul>
          <li><i class="icon-play"></i> {{ data.play_count }}</li>
          <li><i class="icon-star"></i> {{ data.star_count }}</li>
          <li>作者Eric</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {
          title: 'title',
          desc: 'xxxxxxxxx',
          author: 'GGGG',
          star_count: '23333',
          play_count: '23333',
          created_at: '2016-03-01',
          banner: require('img/card.png')
        }
      }
    }
  },
  computed: {
    bg () {
      return `background: url(${this.data.banner}) top/contain no-repeat`
    }
  }
}
</script>
