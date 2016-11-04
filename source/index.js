/* eslint no-console:0 */
'use strict'

const ConsoleReporter = require('joe-reporter-console')

/**
List Reporter for Joe.
Joe attaches and calls the methods of this classes instance.
@example
const joe = require('joe').addReporter(require('joe-reporter-list').create({color: false}))
// joe.suite(...)
@constructor
@class ListReporter
@extends ConsoleReporter
@access public
*/
class ListReporter extends ConsoleReporter {
	/**
	Set the configuration for our instance.
	@param {Object} [config]
	@chainable
	@returns {this}
	@access public
	*/
	constructor (...args) {
		super(...args)

		// Defaults
		if ( this.config.markFail == null )    this.config.markFail   = this.config.utf8 ? '✘ ' : 'ERR! '
		if ( this.config.markPass == null )    this.config.markPass   = this.config.utf8 ? '✔ ' : 'OK   '

		// Overrides
		this.config.itemFinish = '$mark $name'
	}

	/**
	Override the console reporters start suite to do nothing
	@returns {this}
	*/
	startSuite () {
		return this
	}

	/**
	Override the console reporters start test to do nothing
	@returns {this}
	*/
	startTest () {
		return this
	}

	/**
	Override the console reporters finish suite to do nothing
	@param {Suite} suite
	@param {Error} [err]
	@returns {this}
	@chainable
	@access protected
	*/
	finishSuite (suite, err) {
		if ( err )  return super.finishSuite(suite, err)
		return this
	}
}

// Export
module.exports = ListReporter
