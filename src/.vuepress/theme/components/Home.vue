<template>
	<main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
		<header class="hero">
			<img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" />

			<h1 v-if="data.heroText !== null" id="main-title">
				{{ data.heroText || $title || 'Hello' }}
			</h1>

			<p v-if="data.tagline !== null" class="description">
				{{ data.tagline || $description || 'Welcome to your VuePress site' }}
			</p>

			<p v-if="data.actionText && data.actionLink" class="action">
				<NavLink class="action-button" :item="actionLink" />
			</p>
		</header>

		<Content class="theme-default-content custom" />

		<div v-if="data.features && data.features.length" class="features">
			<div v-for="(feature, index) in data.features" :key="index" class="feature">
				<h2>{{ feature.title }}</h2>
				<p>{{ feature.details }}</p>
			</div>
		</div>

		<div class="companies-using">
			<div class="inner">
				<h3>Some companies using InversifyJS</h3>

				<div v-if="data.companies && data.companies.length" class="companies">
					<div v-for="(company, index) in data.companies" :key="index" class="company">
						<a :href="company.link"><img :src="company.logo" width="100"/></a>
					</div>
				</div>
			</div>
		</div>

		<div v-if="data.footer" class="footer">
			{{ data.footer }}

			<div v-if="data.copyright" class="copyright">
				{{ data.copyright }}
			</div>
		</div>
	</main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';

export default {
	name: 'Home',

	components: { NavLink },

	computed: {
		data() {
			return this.$page.frontmatter;
		},

		actionLink() {
			return {
				link: this.data.actionLink,
				text: this.data.actionText
			};
		}
	}
};
</script>

<style lang="stylus">
.home
  max-width 100%
  margin 0px auto
  display block
  .hero
    background linear-gradient(0deg, rgba(0, 116, 193,0.7), rgba(0, 116, 193,0.7)), url('/header-1.jpg');
    background-size cover
    background-attachment fixed
    text-align center
    padding 5rem 0 2.5rem 0

    img
      max-width 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 4rem
      font-weight 500
      color #fff
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color #fff
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      padding 0.8rem 1.6rem
      border-radius 5rem
      transition background-color .1s ease
      box-sizing border-box
      box-shadow 0 4px 15px 0 rgba(0,0,0,.2)
      background-color lighten($accentColor, 2%)
      &:hover
        background-color darken($accentColor, 10%)

  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

  .companies-using
    .inner
      max-width 700px
      margin 0px auto

    text-align center
    background-color #f6f6f6
    padding 2.5rem

    h3
      text-align center
      color #999

    .companies
      display flex
      width 100%
      justify-content space-evenly
      flex-wrap wrap

      .company
        padding 10px

      img
        opacity 0.4
        filter grayscale(100%)
        transition 0.5s
        &:hover
          opacity 1
          filter none

.features {
    max-width: 69%;
    margin: 0px auto;
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
