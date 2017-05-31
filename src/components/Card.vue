<template>
  <li :style="bg">
    <div class="inner-card">
      <div class="slide">
        <p>{{ data.desc }}</p>
        <p>{{ data.created_at }}</p>
      </div>
      <div class="footer-bar">
        <h4>{{ data.title }}</h4>
        <ul>
          <li><i class="icon-play"></i> {{ data.play_count }}</li>
          <li><i class="icon-star"></i> {{ data.star_count }}</li>
          <li>{{ data.author }}</li>
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

<style lang="scss">
@import '~styles/mixins';
@import '~styles/modules/vars';

.card-collection {
  color: #000;
  background: $tea;
  padding: 60px;
  >ul {
    @include reset-list;
    margin-left: -60px;
    >li {
      position: relative;
      float: left;
      height: 260px;
      width: calc((100% - 90px) / 3);
      margin-left: 60px;
      background: url(~img/card.png) top / contain no-repeat;
      cursor: pointer;
      border-radius: 6px;
      .inner-card {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        position: absolute;
        width: 100%;
        bottom: 0;
        background: $white;
        padding: 14px 20px;
        h4 {
          margin: 0 auto 10px;
        }
        .slide {
          overflow: hidden;
          height: 0;
          visibility: hidden;
          transition: height 0.5s ease-out;
          p {
            margin-top: 0;
          }
          p:last-child {
            margin-top: 20px;
          }
          border-bottom: 1px solid $gray;
          margin-bottom: 14px;
        }
        .footer-bar {
          ul {
            @include reset-list;
            li {
              margin-left: 10px;
              &:first-child {
                margin-left: 0;
              }
              &:last-child {
                float: right;
              }
              .icon-star {
                background: url(~img/star.png) center / contain no-repeat;
              }
              .icon-play {
                background: url(~img/play.png) center / contain no-repeat;
              }
            }
          }
        }
      }
      &:hover  {
        // @include shadow;
        .slide {
          visibility: visible;
          height: 80px;
          transition: height 0.5s ease-out;
        }
      }
    }
  }
}

</style>
