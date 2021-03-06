import { reverse } from 'lodash'

export default {
  data () {
    return {
      filterKey: '',
      sortKey: '' /* cardListData */
    }
  },
  methods: {
    handleTabChange (type, e) {
      console.log('changed', e)
      this.filterKey = type
    },
    handleSort () {
      this.sortKey = Math.random()
    }
  },
  computed: {
    filterData () {
      const filterKey = this.filterKey
      /*eslint-disable*/
      const sortKey = this.sortKey // just make is reactive
      return reverse(this.cardListData).filter(item => item.type === filterKey || this.filterKey === '' || this.filterKey === 'card')
    }
  }
}
