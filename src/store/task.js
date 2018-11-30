export default {
    // Общий стейт(состояние) приложения
    state: {
        tasks: [
            {
              'id': 1,
              'title': 'This title to task id = 1',
              'description': 'This description to task id = 1',
              'whatWatch': 'Film',
              'completed': false,
              'editing': false
            },
            {
              'id': 2,
              'title': 'This title to task id = 2',
              'description': 'This description to task id = 2',
              'whatWatch': 'Serial',
              'completed': false,
              'editing': false
            }
          ]
    }, 
    mutations: {
        newTask (state, payload) {
            state.tasks.push(payload)
        }
    },
    actions: {
        // {commit} - через объект со свойством commit нужно диспатчить в мутации
        // payload - это переданная константа(таск)
        newTask ({commit}, payload) {
            payload.id = Math.random() // рандомное значение для ID таска
            commit('newTask', payload)
        }
    },
    // в getters происходит взаимодействие с текущим стором
    // каждый геттер является функцией
    getters: {
        // передача стейта в каждую функцию
        tasks (state) {
            // нужно обязательно что-то возвращать из геттера
            return state.tasks
        }
    }
}