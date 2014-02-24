KV.Views.NavView = Backbone.View.extend

	step: 0
	currentStep: 0
	
	initialize: (@o) ->
		_.bindAll @, 'scroll', 'setup'
		return
		@setup()
		$(document).bind 'scroll', @scroll
		$(window).on 'resize', @setup

	scroll: ->
		y = $(document).scrollTop()
		totalSteps = 13
		r = y / (@windowH * 2)
		@step = Math.floor(r * totalSteps)
		if @step > totalSteps
			@step = totalSteps
		if @step < 0
			@step = 0
		console.log @step
		if @currentStep != @step
			@currentStep = @step
			@o.appModel.trigger 'change-step', @currentStep
			if @currentStep >= (totalSteps/2)
				$("#fixed-nav").removeClass 'hide'
				$("#fixed-nav").css
					opacity: 0
				TweenMax.to $('#fixed-nav'), 1, 
					opacity: 1
					ease: Quint.easeOut
			else
				$("#fixed-nav").addClass 'hide'

	setup: ->
		@windowH = $(window).height()