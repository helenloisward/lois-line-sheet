Template.hello.helpers({
  items:function(){
    return Items.find().fetch()
  }
})
