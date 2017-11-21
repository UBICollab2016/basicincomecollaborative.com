/**
 * Basic Income Collaborative
 */

var BIC = BIC || {};


/**
 * Subscription form
 */

BIC.subscription_form = function subscription_form() {
  var target = $('.form--mailchimp');
  var url = target.data('action');
  var msg = $('.form--message');

  target.ajaxChimp({
    url: url,
    callback: function (resp) {
      if ($('.parsley-error').length) {
        return false;
      }

      if (resp.result === 'success') {
        msg.text('Success! Please confirm your email address by clicking the link in the email we just sent you.');
        target.find('input[type="text"]').val('');
      } else {
        msg.text(resp.msg);
      }
    }
  });
};


/**
 * Init
 */

BIC.init = (function init() {
  BIC.subscription_form();
})();
