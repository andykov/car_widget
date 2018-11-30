<template>
  <div class="content-wrapper">
    <section class="section">
      <div class="container">
        <h1>Home</h1>
        <input
          v-model="taskTitle"
          type="text"
          placeholder="What we will watch?"
          @keyup.enter="newTask"
        >
        <textarea
          v-model="taskDescription"
          cols="30"
          rows="10"
          @keyup.enter="newTask"
        />
        <div class="option-list">
          <div>
            <input
              id="radioFilm"
              v-model="whatWatch"
              type="radio"
              name="radioFilm"
              value="Film"
            >
            <label for="radioFilm">
              Film
            </label>
          </div>
          <div>
            <input
              id="radioSerial"
              v-model="whatWatch"
              type="radio"
              name="radioFilm"
              value="Serial"
            >
            <label for="radioSerial">
              Serial
            </label>
          </div>
        </div>
        <div class="total-time">
          <!-- Film Time -->
          <div
            v-if="whatWatch === 'Film'"
            class="total-time__film"
          >
            <span class="time-title">
              Hours
            </span>
            <input
              v-model="filmHours"
              type="number"
            >
            <span class="time-title">
              Minutes
            </span>
            <input
              v-model="filmMinutes"
              type="number"
            >

            <p>{{ filmTime }}</p>
          </div>

          <!-- Serial Time -->
          <div
            v-if="whatWatch === 'Serial'"
            class="total-time__serial"
          >
            <span class="time-title">
              How many season?
            </span>
            <input
              v-model="serialSeason"
              type="number"
            >
            <span class="time-title">
              How many series?
            </span>
            <input
              v-model="serialSeries"
              type="number"
            >
            <span class="time-title">
              How long is one series? (minutes)
            </span>
            <input
              v-model="serialSeriesMinutes"
              type="number"
            >

            <p>{{ serialTime }}</p>
          </div>
        </div>

        <!-- Add new tag -->
        <div class="tag-list tag-list--add">
          <div
            class="tag-wrap"
            @click="tagMenuShow = !tagMenuShow"
          >
            <div class="tag">
              <span class="tag__name">
                Add new
              </span>
              <span
                class="tag__remove"
                :class="{ active: !tagMenuShow }"
              />
            </div>
          </div>
        </div>

        <!-- Show input -->
        <div
          v-if="tagMenuShow"
          class="tag-list tag-list--menu"
        >
          <input 
            v-model="tagTitle"
            type="text"
            placeholder="New tag"
            @keyup.enter="newTag"
          >
          <button
            class="button-default"
            type="button"
            @click="newTag"
          >
            Send
          </button>
        </div>

        <!-- All tags -->
        <div class="tag-list">
          <div
            v-for="tag in tags"
            :key="tag.title"
            class="tag-wrap"
          >
            <div
              class="tag"
              :class="{active: tag.use}"
              @click="addTagUsed(tag)"
            >
              <span class="tag__name">
                {{ tag.title }}
              </span>
              <span class="tag__remove">
                X
              </span>
            </div>
          </div>
        </div>
        <p>{{ tagsUsed }}</p>
        <div class="button-send">
          <button
            class="button-default"
            type="button"
            @click="newTask"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      taskId: 3,
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Film',

      // Total Time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,

      // Tags
      tagTitle: '',
      tagMenuShow: false,
      tagsUsed: [],
      tags: [
          {
              title: 'Comedy',
              use: false
          },
          {
              title: 'Westerns',
              use: false
          },
          {
              title: 'Adventure',
              use: false
          }
      ]
    }
  },
  computed: {
    filmTime () {
        let min = (this.filmHours * 60) + (this.filmMinutes * 1)
        return this.getHoursAndMinutes(min);
    },
    serialTime () {
        let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
        return this.getHoursAndMinutes(min);
    }
  },
  methods: {
    newTag () {
      if (this.tagTitle === '') {
        return
      }
      this.tags.push({
        title: this.tagTitle,
        used: false
      })
      // const tag = {
      //   title: this.tagTitle,
      // }
    },
    newTask () {
      // заглушка, чтобы при пустых полях не отправлялись данные
      if (this.taskTitle === '') {
        return
      }

      let time
      if (this.whatWatch === 'Film') {
          time = this.filmTime
      } else {
          time = this.serialTime
      }

      // this.tasks обращение к массиву tasks
      // .push - перечисление какие параметры из массива нужно пушить
      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        tags: this.tagsUsed,
        completed: false,
        editing: false
      }
      console.log(task)
      

      // Reset - сбрасывание введеных значений в полях и увеличение id на 1
      this.taskId += 1
      this.taskTitle = ''
      this.taskDescription = ''
      this.tagsUsed = []
    },
    addTagUsed(tag) {
        tag.use = !tag.use
        if (tag.use) {
            this.tagsUsed.push(
                tag.title
            )
        } else [
            this.tagsUsed.splice(tag.title, 1)
        ]
    },
    getHoursAndMinutes (minutes) {
        let hours = Math.trunc(minutes / 60) // деление минут на 60, округление до целого числа и отбрасывание всего после запятой
        let min = minutes % 60 // берем остаток от minutes (то что обрезалось)
        return hours + ' Hours ' + min + ' Minutes'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
