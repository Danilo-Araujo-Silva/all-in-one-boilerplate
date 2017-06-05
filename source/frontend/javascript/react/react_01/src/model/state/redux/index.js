import './actions/types'
import './actions/creators'
import './store'
import './actions/bounds'

import './stack'
import {dispatch} from 'model/state/redux/store'

dispatch('notification.success.insert', {title: 'Oioioi', description: 'Aloha!!'})
dispatch('notification.success.insert', {title: 'Aiaiai', description: 'HA!!'})
dispatch('notification.success.insert', {title: 'Eieiei', description: 'LALA!!'})
