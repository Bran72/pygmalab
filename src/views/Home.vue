<template>
  <div v-if="role === 'admin'" class="home">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <div v-else-if="role === 'freelance'" class="home">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <div v-else class="home">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical is-8">
        <NewProject class="box-sh-outline is-vertical" />
        <NewProject class="box-sh-inline is-vertical" />
      </div>
      <div class="tile is-parent">
        <article class="tile box-sh-outline is-child jc-center">
          <div class="content">
            <Calendar title-position="left" :attributes="attrs" />
            <div class="subtitle is-6">Evènements à venir</div>
            <ul>
              <li class="event box-sh-outline">Toto</li>
              <li class="event box-sh-outline">Toto</li>
              <li class="event box-sh-outline">Toto</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import NewProject from '../components/Cards/NewProject'
import { Calendar } from 'v-calendar'

export default {
  name: 'Home',
  components: {
    NewProject,
    Calendar
  },
  data () {
    return {
      role: 'client',
      attrs: [
        {
          key: 'today',
          highlight: true,
          popover: {
            label: 'Deadline: Chaise en bois',
          },
          dates: new Date(),
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .mt-075 {margin-top: .75rem !important}
  .mr-075 {margin-right: .75rem !important}
  .ml-075 {margin-left: .75rem !important}
  .mb-075 {margin-bottom: .75rem !important}

  .vc-container {
    border: none;
  }
  .subtitle {
    text-align: left;
  }
  ul {
    margin: 0!important;
    .event {
      margin: 1rem 0;
      padding: 1rem;
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      list-style: none
    }
  }
</style>