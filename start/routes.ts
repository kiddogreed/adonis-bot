

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.get('test','TestsController.test')

Route.get('mirror','TestsController.echo')


Route.get('photo','TestsController.media')