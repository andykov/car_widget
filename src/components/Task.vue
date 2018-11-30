<template>
  <div class="content-wrapper">
    <section class="section">
      <div class="container">
        <h1>Tasks</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="task-list">
          <!-- :class="{ completed: task.completed }"
                    Объявление класса completed который будет появляться в зависимости от значения переменной completed в массиве таска
                     -->
          <div
            v-for="task in tasks"
            :key="task.id"
            class="task-item"
            :class="{ completed: task.completed }"
          >
            <div class="ui-card ui-card--shadow">
              <div class="task-item__info">
                <div class="task-item__main-info">
                  <span class="task-item__label">
                    {{ task.whatWatch }}
                  </span>
                  <span> Total Time:</span>
                </div>
                <span class="button-close" />
              </div>
              <div class="task-item__content">
                <div class="task-item__header">
                  <div class="ui-checkbox-wrapper">
                    <input
                      v-model="task.completed"
                      class="ui-checkbox"
                      type="checkbox"
                    >
                  </div>
                  <span class="task-item__title">
                    {{ task.title }}
                  </span>
                </div>
                <div class="task-item__body">
                  <p>{{ task.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
