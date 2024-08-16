const mixer = require('../../../../../core/shared/mixer')
const Propertiable = require('../../../../../core/shared/mixins/Propertiable')
const Markdown = require('sools-modeling/types/Markdown')

module.exports = mixer.mixin([Propertiable], (base) => {
  return class Wikiable extends base {

  }
})
  .define()
  .properties({
    wiki: {
      type: Markdown,
    }
  })