package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Messages

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.home())
  }

  def find = Action {
    Ok(views.html.find())
  }
  
  def join = Action {
    Ok(views.html.join())
  }
}